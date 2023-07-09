import { h, Component, Fragment } from 'preact'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getChristmasImage } from '../season'
import {
  makeNavbarDark,
  makeNavbarDefault,
  nextHeroImage
} from '../modules/app'
import { numberWithCommas } from '../util'
import links from '../_data/links'
import Commit from './commit'
import Popup from './popup'

const PopupMsg = () => {
  return (
    <Fragment>
      <p>
        This is a fake copy of the RuneLite website designed to look like the
        real one. We could have served you an infected RuneLiteSetup.exe
        instead, causing you to install a malicious client which hacks you.
      </p>

      <p>
        You can not tell if two web sites are the same by visually inspecting
        them.
      </p>

      <p>
        Sometimes, criminals buy ads on Google to get the top search result,
        typically with a website identical to{' '}
        <a href="https://runelite.net">runelite.net</a> whose name is a close
        misspelling of runelite.net. You may have clicked this and not realized.
      </p>

      <p>
        We recommend using{' '}
        <a href="https://runelite.net/verify">https://runelite.net/verify</a> to
        verify the authenticity of your RuneLiteSetup file, and check your
        browser history to see where you downloaded it from.
      </p>
    </Fragment>
  )
}

function isOsCorrect(osName) {
  const platform = navigator.platform.toLowerCase()

  if (platform.indexOf('os x') !== -1 || platform.indexOf('mac') !== -1) {
    return osName === 'macOS'
  }

  if (platform.indexOf('win') !== -1) {
    if (
      navigator.userAgent.indexOf('Win64') !== -1 ||
      navigator.userAgent.indexOf('WOW64') !== -1
    ) {
      return osName === 'Windows64'
    } else {
      return osName === 'Windows32'
    }
  }

  if (platform.indexOf('linux') !== -1) {
    if (platform.indexOf('x86_64') !== -1) {
      return osName === 'Linux64'
    }

    if (platform.indexOf('i686') !== -1) {
      return osName === 'Linux32'
    }

    if (
      platform.indexOf('armv8') !== -1 ||
      platform.indexOf('aarch64') !== -1
    ) {
      return osName === 'LinuxAarch64'
    }

    if (platform.indexOf('arm') !== -1 || platform.indexOf('aarch32') !== -1) {
      return osName === 'LinuxAarch32'
    }

    return osName === 'Linux32'
  }

  return false
}

class Hero extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      interval: 0,
      showMsg: false
    }
  }

  handleScroll() {
    const jumbo = document.getElementById('jumbo')
    const jumboBottom = jumbo.offsetTop + jumbo.offsetHeight
    const navbar = document.getElementsByClassName('navbar')[0]
    const fromTop = jumboBottom - navbar.offsetHeight
    const stop = window.scrollY || window.pageYOffset || document.body.scrollTop

    if (this.props.navbarDark) {
      if (stop > fromTop) {
        this.props.makeNavbarDefault()
      }
    } else {
      if (stop <= fromTop) {
        this.props.makeNavbarDark()
      }
    }
  }

  showPopup() {
    this.setState({ showMsg: true })
  }

  componentDidMount() {
    // Add background updater
    this.setState({
      interval: setInterval(() => {
        const { images, heroImage, nextHeroImage } = this.props
        const numImages = images.length
        const nextImageId = (heroImage + 1) % numImages
        const img = new Image()
        img.src = getChristmasImage(images[nextImageId])
        img.onload = () => nextHeroImage(numImages)

        this.setState({
          loadingHeroImg: img
        })
      }, 8000)
    })

    // Change navigation bar to fit hero
    this.handleScroll()

    // Add scroll listener for navigation bar
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    const { interval, loadingHeroImg } = this.state

    // Remove background updater
    clearInterval(interval)

    // onload will do some react lifecycle stuff. remove so that
    // component is not modified after its been removed from the DOM
    if (loadingHeroImg) {
      delete loadingHeroImg.onload
    }

    // Reset navigation bar
    this.props.makeNavbarDefault()

    // Remove scroll listener
    document.removeEventListener('scroll', this.handleScroll)
  }

  render({
    title,
    description,
    buttons,
    release,
    commit,
    playing,
    loggedIn,
    heroImage
  }) {
    let downloadButtons = buttons.filter(button => isOsCorrect(button.os))
    if (downloadButtons.length === 0) {
      downloadButtons = [buttons.find(button => button.os === 'all')]
    }
    const showDetail = downloadButtons.length > 1

    return (
      <div
        class="jumbotron jumbotron-fluid"
        style={{
          '--jumbotron-background': `url(${getChristmasImage(
            this.props.images[heroImage]
          )})`
        }}
        id="jumbo"
      >
        {this.state.showMsg && (
          <Popup handleClose={() => this.setState({ showMsg: false })}>
            <PopupMsg />
          </Popup>
        )}
        <div class="jumbotron-cell">
          <div class="jumbotron-body">
            <div class="jumbotron-header">
              <h1>
                RUNELITE<span>.NET</span>
              </h1>
              <p>{description}</p>

              <a id="contribute" class="btn" href={links.github}>
                Contribute
              </a>

              <div id="download">
                <div class="btn-group">
                  {downloadButtons.map(({ link, icon, text }) => (
                    <a
                      id="direct-download-btn"
                      class={'btn btn-primary'}
                      title={
                        'Download for ' +
                        text.os +
                        (text.arch ? ' (' + text.arch + ')' : '')
                      }
                      href={"#"}
                      onClick={this.showPopup.bind(this)}
                      native
                      rel="nofollow"
                    >
                      <i class={icon} /> Download
                      {showDetail && text.arch ? ' (' + text.arch + ')' : ''}
                    </a>
                  ))}
                  <div class="dropdown">
                    <button
                      class={
                        'btn dropdown-toggle dropdown-toggle-split btn-primary'
                      }
                    >
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu" style={{ textShadow: 'none' }}>
                      {buttons.map(({ link, icon, text }) => (
                        <a
                          class="dropdown-item"
                          href={"#"}
                          onClick={this.showPopup.bind(this)}
                          native
                          rel="nofollow"
                        >
                          <i class={icon} /> Download for {text.os}{' '}
                          {text.arch ? ' (' + text.arch + ')' : ''}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="small">
              <h6>Players:</h6>
              {numberWithCommas(playing) || 'unknown'} online (
              {numberWithCommas(loggedIn) || 'unknown'} in game)
              <h6>Latest release:</h6>
              <a href="#news">{release || 'unknown'}</a>
              <Commit {...commit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    navbarDark: state.app.navbarDark,
    heroImage: state.app.heroImage
  }),
  dispatch =>
    bindActionCreators(
      { makeNavbarDark, makeNavbarDefault, nextHeroImage },
      dispatch
    )
)(Hero)

import Unsplash from "unsplash-js"

const unsplash = {
  install: new Unsplash({
    applicationId: '7f1d7e158e9b256c82b7afe69fddeb58044c79ebe041306f77e65296c504821d',
    secret: 'ac33eea90c99b14d20d6c680a232c0cba43aceac49b505149bc9eb98476d0ce8',
    callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
  })
}

export default unsplash
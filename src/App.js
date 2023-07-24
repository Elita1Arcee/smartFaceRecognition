import React, { Component} from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
//import RankUserInfo from './components/RankUserInfo/RankUserInfo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: 'https://picsum.photos/id/633/300',
      box: {},
      route: 'signIn'
    }
  }

  findFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width -  (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  showFaceBox = (box) =>{
    console.log(box)
    this.setState({box: box})
  }


  onInputChange = (event) =>{
    this.setState({input: event.target.value})
    console.log(event.target.value);
  }

  onBtnSubmit = () =>{
      this.setState({imgUrl: this.state.input})
      console.log(this.state.imgUrl);
      const PAT = '651cac170f994c60bba718b3765e7812';
      const USER_ID = 'elita1arcee';       
      const APP_ID = 'wow-ReactNode-App';
      const MODEL_ID = 'face-detection';
      const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
      //For reading color percentages in image
      //const MODEL_ID = 'color-recognition';
      //const MODEL_VERSION_ID = 'dd9458324b4b45c2be1a7ba84d27cd04';    
      const IMAGE_URL = this.state.input;

      console.log(IMAGE_URL);

      const raw = JSON.stringify({
          "user_app_id": {
              "user_id": USER_ID,
              "app_id": APP_ID
          },
          "inputs": [
              {
                  "data": {
                      "image": {
                          "url": IMAGE_URL
                      }
                  }
              }
          ]
});

console.log(IMAGE_URL);

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => this.showFaceBox(this.findFaceLocation(result)))
    .catch(error => console.log('error', error));
  }

  onRouteChange = (route) =>{
    this.setState({route: route});
  }

  render() {
    return (
        <div className="App">
        <ParticlesBg className='particles-bg-canvas-self' type="cobweb" bg={true} />
          <Navigation onRouteChange={this.onRouteChange}/>
          {this.state.route === 'home' 
          ? <div>
          <Logo/> 
          {/* <RankUserInfo/> */}
          <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit}/>
          <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl} />
          </div> : 
          (
            this.state.route === 'signIn' 
            ? <SignIn onRouteChange = {this.onRouteChange}/>
            : <Register onRouteChange = {this.onRouteChange}/>
          )
          
        }
          
          
          
        </div>
  )
  }
  
}

export default App;

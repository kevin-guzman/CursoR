
import React, {Component} from 'react'
import { StyleSheet, 
        Text, 
        View,
        Button,
        Image,
        Alert,
        TextInput,
        TouchableOpacity
      } from 'react-native';

import imagen from './media/Meme.jpg'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import ProgressCircle from 'react-native-progress-circle'
     



 class App extends Component  {


  constructor(props) {
    super(props);
    this.state = {
      Nombre:'',
      Contraseña:'',
      Estado:'',

    };
  }

  login = () =>{

    const {Nombre}= this.state
    const {Contraseña}= this.state
    const {Estado} = this.state
    if ( (Nombre === '') && (Contraseña === '')){
      Alert.alert('Nombre o contraseña vacíos')
      //{(Estado)=>{this.setState('Nombre o contraseña vacíos')}}
      

    }
    else{
      Alert.alert('Usuario: '+ Nombre + '\nContraseña: '+ Contraseña)
    }
    
  }

  touch = () =>{
    Alert.alert('Touch normal')
  }

  longTouch = () =>{
    Alert.alert('Touch largo')
  }


  render (){

    const {Nombre}= this.state
    const {Contraseña}= this.state
    const {Estado} = this.state


        return (
        <LinearGradient
                colors={[   'rgba(77,14,144,0.87)','rgba(25,47,106,0.97)'  ]}
                style={styles.container}
                //style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
              >
          <View style={styles.container2}>
      
      
                <View style={styles.header} >
                  <View syle={styles.headerLeft} >
                    <TouchableOpacity onPress={()=>this.touch()} onLongPress={()=>this.longTouch()} >
                      <Image
                        style={styles.image}
                        source={imagen}
                        >
        
                      </Image>                     
                    </TouchableOpacity>
                  </View>
      
                  <View syle={styles.headerRight} >
                    <Button 
                      style={styles.button} 
                      title="Ingresar"
                      onPress={() => this.login()}
                      >
                    </Button>
                  </View>
                </View>


                <View style={styles.body}>
                  <View>
                    <TextInput
                      style={styles.textimput}
                      placeholder="Nombre"
                      //value={Nombre}
                      onChangeText={(Nombre)=> {this.setState({Nombre})}}
                      >
                    </TextInput>
                  </View>

                  <View>
                    <TextInput
                      style={styles.textimput}
                      placeholder="Contraseña"
                      //value={Contraseña}
                      onChangeText={(Contraseña)=> {this.setState({Contraseña})}}
                      >
                    </TextInput>
                  </View>

                  <View>
                    <Text>
                      {Estado}
                    </Text>
                  </View>

                </View>


                <View style={styles.leg} >
                  <View style={styles.f1} />
                  <View style={styles.f2} />
                  <View style={styles.f3} />
                </View>

                <View style={styles.footer} >
                  <View style={styles.f1} />
                  <View style={styles.f2} />
                  <View style={styles.f3} />
                </View>

                

                
      
      
          </View>
        </LinearGradient>
        );


  }
  

  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection:'column',
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //marginHorizontal:'1%',
    marginTop:'8%',
    //justifyContent: 'center',

  },

  container2:{
    flex: 1,
    flexDirection:'column',
    marginTop:'8%',
    marginHorizontal:'5%',
 
  },

  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    //margin:'10%'
  },

  headerLeft:{
    flex:1,
    margin:'10%',
  },

  headerRight:{
    flex:2,
    margin:'10%',
  },

  image:{
    width:40,
    height:40,
    borderRadius:10,
  },

  body:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    //backgroundColor:'gray'
  },

  textimput:{
    borderColor:'black',
    borderWidth:0.6,
    
  },

  leg:{
    flex:1,
    padding:'3%',
    marginVertical:'1%',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
  },

  footer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:'10%'
  },

  f1:{
    width:30,
    height:30,
    backgroundColor:'gray',
  },

  f2:{
    width:30,
    height:30,
    backgroundColor:'purple',
    borderRadius:15,
  },

  f3:{
    width:30,
    height:30,
    backgroundColor:'red',
  },


});


export default App
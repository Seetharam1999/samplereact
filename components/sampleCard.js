import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  StyleSheet,
  Button,
  Alert,
  PanResponder
} from "react-native";
import { Card, Icon, Rating, Input } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

class sampleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      comment: "",
      rating: 0,
      showModal: false,
    };
  }

  static navigationOptions = {
    title: "Sample Card",
  };

  toggleModal(_this) {
    _this.setState({ showModal: !_this.state.showModal });
  }

  markFavorite(dishId) {
    console.log(dishId);
}

  addComment(dishId, rating, author, comment) {
    console.log(dishId,rating,author,comment);
    this.toggleModal(this);
  }

  render() {
    let _this = this;
    
    const RenderDish = (props) => {
    this.handleViewRef = ref => this.view = ref;
      const dish = props.dish;
        const recognizeDrag=({moveX,moveY,dx,dy})=>{
          if(dx<-200)
             return true;
          else return false;
        }
        const recognizeComment=({moveX,moveY,dx,dy})=>{
          if(dx>200)
          return true;
          else return false;
        }
       
        const panResponder=PanResponder.create({
          onStartShouldSetPanResponder:(e,gestrueState)=>{
              return true;
          },
          onPanResponderGrant: () => {
            this.view.rubberBand(1000).then(endState => 
              console.log(endState.finished ? 'finished' : 'cancelled'));
            
            },
            onPanResponderMove:(e,gestrueState)=>{
              if(recognizeComment(gestrueState))
              
                return this.toggleModal(_this);
            },
          onPanResponderEnd:(e,gestrueState)=>{
            if(recognizeDrag(gestrueState))
              Alert.alert(
                'Add favorites',
                'Are you sure you wish to add SRS to your favorites',
                [
                  {
                    text:'cancel',
                    onPress:()=>console.log('Cancel Pressed'),
                    style:'cancel'
                  },
                  {
                    text:'Ok',
                    onPress:()=>props.favorite ? console.log('Already favorite'):props.onPress(),
                    style:'ok'

                  }
                ],
                {cancelable:false}
              )
              return true;
          }
        })

      
        return (
          <Animatable.View animation="fadeInDown" duration={2000} delay={1000}
             ref={this.handleViewRef}
            {...panResponder.panHandlers}>                
 
          <Card title="sample Dish"
              image={require('./images/uthappizza.png')}
          >
            <Text style={{ margin: 10 }}>"helo hoejdghf
            jdhfjd
            jdkfh
            lsf
            hello this is very favorite dishes"</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
              }}>
            <Icon
                raised
                reverse
                name={props.favorite ? "heart" : "heart-o"}
                type="font-awesome"
                color="#f50"
                onPress={() =>
                  props.favorite
                    ? console.log("Already favorite")
                    : props.onPress()
                }
              />
            <Icon
                raised
                reverse
                name="pencil"
                type="font-awesome"
                color="#512DA8"
                onPress={() => props.toggleModal(_this)}
              />
            </View>
          </Card>
          </Animatable.View>
        );
      
    };

    // const RenderComments = (props) => {
    //   const comments = props.comments;

    //   const renderCommentItem = ({ item, index }) => {
    //     return (
    //       <View key={index} style={{ margin: 10 }}>
    //         <Text style={{ fontSize: 14 }}>{item.comment}</Text>
    //         <Rating
    //           showRating
    //           readonly
    //           startingValue={item.rating}
    //           showRating={false}
    //           imageSize={18}
    //           style={{ alignItems: "flex-start", padding: 5 }}
    //         />
    //         <Text style={{ fontSize: 12 }}>
    //           {"-- " + item.author + ", " + item.date}
    //         </Text>
    //       </View>
    //     );
    //   };

    //   return (
    //     <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>                

    //     <Card title="Comments">
    //       <FlatList
    //         data={comments}
    //         renderItem={renderCommentItem}
    //         keyExtractor={(item) => item.id.toString()}
    //       />
    //     </Card>
    //     </Animatable.View>
    //   );
    // };

    
    return (
      <ScrollView>
        <RenderDish
          onPress={() => this.markFavorite(1)}
          toggleModal={this.toggleModal}
        />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => this.toggleModal(_this)}
          onRequestClose={() => this.toggleModal(_this)}>
          <View style={styles.modal}>
            <Rating
              showRating
              startingValue={this.state.rating}
              imageSize={18}
              style={{ alignItems: "center", padding: 5 }}
              onFinishRating={(rating) => {
                this.setState({ rating });
              }}
            />
            <Input
              placeholder="Author Name"
              onChangeText={(text) => {
                this.setState({ author: text });
              }}
              leftIcon={
                <Icon
                  name="user"
                  type="font-awesome"
                  size={24}
                  color="black"
                  containerStyle={{ marginRight: 10 }}
                />
              }
            />

            <Input
              placeholder="Comment"
              onChangeText={(text) => {
                this.setState({ comment: text });
              }}
              leftIcon={
                <Icon
                  name="comment"
                  type="font-awesome"
                  size={24}
                  color="black"
                  containerStyle={{ marginRight: 10 }}
                />
              }
            />
            <View style={{ marginBottom: 20, marginTop: 20 }}>
              <Button
                onPress={() => {
                  if (this.state.author === "" || this.state.comment === "") {
                    Alert.alert(
                      "Invalid input",
                      "Fill all the details to continue",
                      [
                        {
                          text: "OK",
                          onPress: () => {
                            return;
                          },
                        },
                      ]
                    );
                  } else {
                    this.addComment(
                      1,
                      this.state.rating,
                      this.state.author,
                      this.state.comment
                    );
                  }
                }}
                color="#512DA8"
                title="SUBMIT"
              />
            </View>
            <View>
              <Button
                onPress={() => {
                  this.toggleModal(_this);
                }}
                color="#AAAAAA"
                title="CANCEL"
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#512DA8",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});

export default sampleCard;
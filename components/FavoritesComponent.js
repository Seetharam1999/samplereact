import React, { Component } from 'react';
import {View,Text,FlatList,Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import {Loading} from './LoadingComponent'
import Swipeout from 'react-native-swipeout';
import {deleteFavorite} from '../redux/ActionCreator';

const mapStateToProps=state=>{
    return {
        dishes:state.dishes,
        favorites:state.favorites
    }
}

const mapDishpatchToProps=dispatch=>({
    deleteFavorite:(dishId)=>dispatch(deleteFavorite(dishId))
})

class Favorites extends Component{
    
    static navigationOptions={
        title:"MY Favorites"
    }

    render()
    {
        const {navigate} =this.props.navigation;

        

       const renderMenuitem=({item,index})=>{
        const rightButton=[
            {
                text:'Delete',
                type:'delete',
                onPress:()=> {
                    Alert.alert(
                        'Delete favorite?',
                        'Are you sure you wish to delete the favorite dish'+item.name+'?',
                        [
                            {
                                text:'Cancel',
                                onPress:()=>console.log(item.name+'Not deleted'),
                                style:'cancel'
                            },
                            {
                                text:'OK',
                                onPress:()=>this.props.deleteFavorite(item.id),
                                style:'ok'
                            }
                        ],
                        {
                            cancelable:false
                        }

                    );
                }
            }
        ];
           return(
               <Swipeout right={rightButton} autoClose={true} >
               <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={()=>navigate('DishDetail',{dishId:item.id})}
                leftAvatar={{source:{uri:baseUrl+item.image}}}
                />
               </Swipeout>
           )

        }
        if(this.props.dishes.isLoading){
            return(
                <Loading/>
            );
        }
        else if(this.props.dishes.errMess)
            return(
                <View>
                    <Text>{this.props.dishes.errMess}</Text>
                </View>
            )
        else{
            return(
                <View>
                    <FlatList
                    data={this.props.dishes.dishes.filter(dish=>this.props.favorites.some(el=>el===dish.id))}
                    renderItem={renderMenuitem}
                    keyExtractor={(item)=>item.id.toString()}
                    />
                </View>
            )
        }
    }
}

export default connect(mapStateToProps,mapDishpatchToProps)(Favorites);

/*Lib Imports*/
import React,{Component} from "react";
import { View, Text, FlatList,Modal } from "react-native";
import Statusbarx from "../Statusbar";
import LightenDarkenColor from "../Constants/LightenDarkenColor";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import FabButton from "../FabButton";
import AddProduct from "./AddProduct";

/*Local Imports*/
import styles from "./styles";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productName: "Powder",
          price: 500,
          rating: 4,
          catagory: "Amazon"
        },
        {
          productName: "Bottle",
          price: 500,
          rating: 3,
          catagory: "Flipkart"
        },
        {
          productName: "Pendrive",
          price: 500,
          rating: 2,
          catagory: "Amazon"
        },
        {
          productName: "Santor",
          price: 500,
          rating: 5,
          catagory: "Flipkart"
        }
      ],
      modalvisible: true
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
          <View style={{ flexDirection: "column" }}>
            <Text>{item.productName}</Text>
            <Text>{item.price}</Text>
          </View>
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <Icon name="delete" style={{ color: "black", fontSize: 20 }} />
          </View>
        </View>
      </View>
    );
  };
  RendeProducts = products => {
    return (
      <View>
        <FlatList
          data={products}
          extraData={this.state}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  };
  _keyExtractor = (item, index) => index + "";
  setModalVisibility = () => {
    this.setState({ modalvisible: !this.state.modalvisible });
  };
  // Newproduct=(item)=>{
  //   let newdata=[...this.state.products]
  //   newdata.push(item)
  //   this.setState({products:newdata})
  // }
  render() {
    let Amazonpro=this.state.products.filter(item => item.catagory === 'Amazon')

    return (
      <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
        <Statusbarx backgroundColor={LightenDarkenColor("#2481b3", -20)} />
        <View style={styles.header}>
          <Text style={{ color: "white" }}>Products</Text>
          <Icon name="link-variant" style={{ color: "white", fontSize: 20 }} />
        </View>
        <View style={styles.CatagoryText}>
          <Text style={{ color: "black" }}>Amazon</Text>
          <Icon name="chevron-down" style={{ color: "black", fontSize: 20 }} />
        </View>
        {this.RendeProducts(Amazonpro)}
        <View style={styles.CatagoryText}>
          <Text style={{ color: "black" }}>Flipkart</Text>
          <Icon name="chevron-down" style={{ color: "black", fontSize: 20 }} />
        </View>
        {/* {this.RendeProducts(Flipkartpro)} */}
        <View style={{ position: 'relative', flex: 1, alignContent: 'flex-end', justifyContent: 'flex-end' }}>
                    <FabButton openModal={this.setModalVisibility} />
                </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.setModalVisibility}
        >
          <AddProduct
            setModalVisibility={this.setModalVisibility}
          />
        </Modal>
      </View>
    );
  }
}

export default Products;

import React,{Component} from "react";
import { View, ScrollView, TextInput, Text, Picker } from "react-native";
import ModalHeader from "./ModalHeader";
import styles from "./styles";
import Stars from '../Stars'

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodName: "",
      price: 0,
      selected: "Amazon",
      Options: ["Amazon", "Flipkart","Shopclues"]
    };
  }
  addProduct = () => {
    let data = {
      productName: this.state.prodName,
      price: this.state.price,
      rating: 4,
      catagory: this.state.selected
    };
    // this.props.newproduct(data);
    this.props.setModalVisibility;
  };
  fieldValidation = () => {
    const { prodName } = this.state;
    if (prodName != "") {
      this.addProduct();
    } else {
      alert("Please enter the product name");
    }
  };
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <View style={styles.addproductcontainer}>
        <ModalHeader
          onSave={this.fieldValidation}
          onClose={this.props.setModalVisibility}
        />
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.Bodycard}>
            <View>
              <Text style={[styles.label, { marginTop: 4 }]}>
                Product Name <Text style={styles.importantFields}>*</Text>
              </Text>
              <TextInput
                placeholder="Enter product name"
                onChangeText={text => this.setState({ prodName: text })}
                value={this.state.prodName}
                style={styles.input}
                autoFocus={true}
                placeholderTextColor="grey"
                multiline={true}
              />
            </View>

            <Picker
              mode="dropdown"
              selectedValue={this.state.selected}
              style={styles.picker}
              onValueChange={itemValue =>
                this.setState({ selected: itemValue })
              }
            >
              {this.state.Options.map(item => (
                <Picker.Item
                  key={item}
                  label={item}
                  value={item}
                />
              ))}
            </Picker>

            <View>
              <Text style={styles.label}>
                Price <Text style={styles.importantFields}>*</Text>
              </Text>
              <TextInput
                placeholder="Enter price"
                keyboardType={"numeric"}
                placeholderTextColor="grey"
                style={styles.input}
                onChangeText={text => this.setState({ price: text })}
                value={this.state.price}
              />
            </View>
            <Stars />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default AddProduct;

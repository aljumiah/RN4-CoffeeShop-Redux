import React, { Component } from "react";
import { Icon, Button, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { quantityCounter } from "../../Utilities";

class CartButton extends Component {
  render() {
    return (
      <Button>
        <Text>
          {this.props.quantity}
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="shoppingcart"
            type="AntDesign"
          />
        </Text>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items,
  quantity: quantityCounter(state.cartReducer.items)
});
export default withNavigation(connect(mapStateToProps)(CartButton));

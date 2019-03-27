import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
import * as actionCreators from "../../store/actions";

class CoffeeCart extends Component {
  handlePress = () => {
    this.props.checkoutCart();
  };

  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem
          item={item}
          key={index}
          removeItemFromCart={this.props.removeItemFromCart}
        />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handlePress}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item =>
      dispatch(actionCreators.removeItemFromCart(item)),
    checkoutCart: () => dispatch(actionCreators.checkoutCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);

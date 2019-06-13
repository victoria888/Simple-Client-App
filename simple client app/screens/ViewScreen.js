import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  YellowBox,
  FlatList,
  ScrollView,
  Alert,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import clients from "../mock/clients";
export default class ViewClientScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [...clients],
      modalVisible: false,
      itemToEdit: undefined,
      address: "",
      clientname: "",
      clientemail: "",
      pnumber: "",
      sex: "",
      enquiry: ""
    };
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ffd600"
        }}
      />
    );
  };

  componentWillUpdate() {
    // console.log(clients);
    // this.setState({ clients: clients});
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  onDelete = id => {
    const newClients = clients.filter(client => client.id === id);
    const index = clients.indexOf(newClients[0]);
    clients.splice(index, 1);
    this.setState({ clients: [...clients] });
  };
  onEdit = (item, visible) => {
    const itemToEdit = clients.filter(client => client.id == item.id);
    const index = clients.indexOf(itemToEdit[0]);
    clients[index].clientname =
      this.state.clientname || clients[index].clientname;
    clients[index].address = this.state.address || clients[index].address;
    clients[index].clientemail =
      this.state.clientemail || clients[index].clientemail;
    clients[index].enquiry = this.state.enquiry || clients[index].enquiry;
    clients[index].pnumber = this.state.pnumber || clients[index].pnumber;
    clients[index].sex = this.state.sex || clients[index].sex;
    this.setState({ clients: [...clients] }, () => {
      this.setModalVisible(visible);
    });
    console.log(clients);
  };
  render() {
    //console.log(this.props.navigation);
    const { itemToEdit } = this.state;
    const displayModal = (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View style={{ padding: 20 }}>
            <Text>Hello World!</Text>
            <View
              style={{
                flexDirection: "row",
                paddingBottom: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Name: </Text>
              <TextInput
                defaultValue={itemToEdit ? itemToEdit.clientname : "Name Here"}
                onChangeText={clientname => this.setState({ clientname })}
                style={styles.inputbox}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingBottom: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Email: </Text>
              <TextInput
                defaultValue={
                  itemToEdit ? itemToEdit.clientemail : "Email Here"
                }
                onChangeText={clientemail => this.setState({ clientemail })}
                style={styles.inputbox}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingBottom: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Phone Number: </Text>
              <TextInput
                defaultValue={itemToEdit ? itemToEdit.pnumber : "Number Here"}
                onChangeText={pnumber => this.setState({ pnumber })}
                style={styles.inputbox}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingBottom: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Sex: </Text>
              <TextInput
                defaultValue={itemToEdit ? itemToEdit.sex : "Sex Here"}
                onChangeText={sex => this.setState({ sex })}
                style={styles.inputbox}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingBottom: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Address: </Text>
              <TextInput
                defaultValue={itemToEdit ? itemToEdit.address : "Address Here"}
                onChangeText={address => this.setState({ address })}
                style={styles.inputbox}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingBottom: 10,
                justifyContent: "space-between"
              }}
            >
              <Text>Enquiry: </Text>
              <TextInput
                defaultValue={itemToEdit ? itemToEdit.enquiry : "Inquiry Here"}
                onChangeText={enquiry => this.setState({ enquiry })}
                style={styles.inputbox}
              />
            </View>
            <TouchableHighlight
              onPress={() => {
                this.onEdit(itemToEdit, !this.state.modalVisible);
              }}
              style={{ backgroundColor: "#fb8c00", alignItems: "center" }}
            >
              <Text>Submit</Text>
            </TouchableHighlight>
            {/* <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight> */}
          </View>
        </View>
      </Modal>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.h2text}>Client List</Text>
        {displayModal}
        <View style={{ height: 80 + "%" }}>
          <ScrollView
            contentContainerStyle={{
              // height: 80 + "%",
              marginTop: "5%",
              flex: 1
            }}
            behaviour="height"
            //keyboardVerticalOffset={64}
          >
            <FlatList
              data={clients}
              initialNumToRender={4}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              showsVerticalScrollIndicator={true}
              scrollEnabled={true}
              renderItem={({ item, key }) => (
                <View style={styles.flatview} key={key}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.name}>{item.clientname}</Text>
                  </View>
                  <View>
                    <Text style={styles.other}>{item.clientemail}</Text>
                    <Text style={styles.other}>{item.sex}</Text>
                    <Text style={styles.other}>{item.address}</Text>
                    <Text style={styles.other}>{item.pnumber}</Text>
                    <Text style={styles.other}>{item.enquiry}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingBottom: 10
                        //justifyContent: "space-around"
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          borderWidth: 0.6,
                          padding: 20,
                          //width: 100,
                          borderRadius: 3,
                          borderColor: "#841584"
                        }}
                        onPress={() => {
                          this.setState({ itemToEdit: item });
                          return this.setModalVisible(true);
                        }}
                      >
                        <Text>Edit</Text>
                      </TouchableOpacity>
                      <View style={{ paddingHorizontal: 20 }} />
                      <TouchableOpacity
                        onPress={() => this.onDelete(item.id)}
                        style={{
                          padding: 20,
                          borderWidth: 0.6,
                          borderRadius: 3,
                          borderColor: "#d50000"
                        }}
                      >
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
        </View>
      </View>
    );
    // return (
    //   <View style={styles.MainContainer}>
    //     {/* //   {allClients} */}
    //     <ScrollView
    //       contentContainerStyle={{ flex: 1 }}
    //       behaviour="height"
    //       keyboardVerticalOffset={64}
    //     >
    /* <ListView
            dataSource={this.state.dataSource}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={item => (
              <View style={{ flex: 1, flexDirection: "column" }}>
                <TouchableOpacity
                  onPress={this.GetClickedItem.bind(this, item.clientname)}
                >
                  <Text style={styles.textViewName}>{item.clientname}</Text>

                  <Text style={styles.textViewContainer}>
                    {item.clientemail}
                  </Text>

                  <Text style={styles.textViewContainer}>{item.pnumber}</Text>

                  <Text style={styles.textViewContainer}>{item.address}</Text>

                  <Text style={styles.textViewContainer}>{item.sex}</Text>

                  <Text style={styles.textViewContainer}>{item.enquiry}</Text>
                </TouchableOpacity>
              </View>
            )}
          /> */
    //     </ScrollView>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    //alignItems: "center",
    width: 90 + "%",
    height: 100 + "%"
  },
  MainContainer: {
    //flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    //alignItems: "center",

    height: 90 + "%"
  },
  name: {
    fontSize: 18
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "#841584",
    borderRadius: 6,
    width: 200,
    alignItems: "center"
  },
  flatview: {
    //flex: 1,
    // justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  },
  other: {
    color: "#9e9e9e",
    fontSize: 10
  },

  textViewName: {
    fontSize: 22,
    padding: 5,
    color: "#000"
  },
  textViewContainer: {
    //textAlignVertical: "center",
    //padding: 4,
    fontSize: 12,
    color: "#757575"
  }
});

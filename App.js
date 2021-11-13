import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Header = () => {
  return (
    <View style={styles.yellow}>
      <View style={styles.blue}>
        <View style={styles.topmost}>
          <Image
            style={{ width: "48%", marginTop: 10 }}
            source={require("./assets/jobprojheading.jpeg")}
          />
          <View style={styles.shadows1}>
            <View style={styles.shadows7}>
              <View style={styles.locationbox}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      marginLeft: 10,
                      margin: 4,
                    }}
                  >
                    Gurgaon
                  </Text>

                  <Image
                    style={{ height: 20, width: 20, margin: 6 }}
                    source={require("./assets/location.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: -10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "white", marginLeft: 30 }}>
              Doctors
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "white", marginLeft: 30 }}>
              Pharmacy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: "white", marginLeft: 30 }}>
              Procedures
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#87D3D1",
            height: 2,
            width: "100%",
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#D3D28E",
              width: "25%",
              height: 2,
              marginLeft: 20,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
};

const Searchbar = () => {
  return (
    <View style={styles.shadows2}>
      <View style={styles.searchbox}>
        <Image
          style={{ height: 20, width: 20, margin: 18 }}
          source={require("./assets/search.png")}
        />

        <TextInput
          style={{ marginLeft: 15, marginRight: 15 }}
          placeholder="Search Doctors, Hospital, Clinics"
        ></TextInput>
        <TouchableOpacity>
          <Image
            style={{ height: 40, width: 30, margin: 10 }}
            source={require("./assets/searchfilter.jpeg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Doctorbox = () => {
  return (
    <View style={styles.doctorbar}>
      <Text
        style={{
          marginTop: 10,
          marginLeft: 105,
          fontSize: 22,
          fontWeight: "bold",
          color: "#F2C86D",
        }}
      >
        Consult Top Doctors
      </Text>
      <Text style={{ marginLeft: 105, marginRight: 60, color: "white" }}>
        Connect and speak with a doctor now
      </Text>
    </View>
  );
};

const Booknow = () => {
  return (
    <View style={styles.shadows3}>
      <View style={styles.booknow}>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "#3A6D78",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Servicebox = (props) => {
  return (
    <View style={styles.shadows5}>
      <TouchableOpacity>
        <View style={styles.servicebar}>
          <Image
            style={{ height: 40, width: 30, margin: 10 }}
            source={props.img}
          />
          <Text
            style={{
              paddingRight: 80,
              marginTop: 15,
              color: "#3A6D78",
              fontSize: 18,
            }}
          >
            {props.data}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Healthconcerns = (props) => {
  return (
    <View style={styles.shadows6}>
      <View style={styles.concernbox}>
        <Image
          style={{ height: 40, width: 30, margin: 10, marginLeft: 17 }}
          source={props.concernimage}
        />
        <Text
          style={{
            marginLeft: 15,
            marginTop: 5,
            color: "#3A6D78",
            fontSize: 15,
          }}
        >
          {props.concern}
        </Text>
      </View>
    </View>
  );
};

const Homebutton = () => {
  return (
    <View style={styles.shadows4}>
      <TouchableOpacity>
        <View style={styles.finalbox}>
          <Image
            style={{ height: 25, width: 25, margin: 5 }}
            source={require("./assets/home.jpeg")}
          />
          <Text style={{ color: "#3A6D78", fontSize: 20, marginTop: 5 }}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Searchbar />
      <Doctorbox />
      <Image
        style={{ height: 140, width: 80, marginTop: -125.4, marginRight: 200 }}
        source={require("./assets/doctor.jpeg")}
      />
      <Booknow />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View style={{ marginRight: 20 }}>
          <Servicebox
            img={require("./assets/medicine.jpeg")}
            data="Buy Medicine"
          />
        </View>
        <View>
          <Servicebox
            img={require("./assets/labtest.jpeg")}
            data="Book Lab Test"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View style={{ marginRight: 20 }}>
          <Servicebox
            img={require("./assets/hospital.jpeg")}
            data="Find Hospital"
          />
        </View>
        <View>
          <Servicebox
            img={require("./assets/freeconsult.jpeg")}
            data="Get Free Consult"
          />
        </View>
      </View>

      <Text
        style={{
          color: "#3A7082",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Common Health Concerns
      </Text>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ marginRight: 15 }}>
          <Healthconcerns
            concernimage={require("./assets/corona.jpeg")}
            concern="COVID"
          />
        </View>
        <View style={{ marginRight: 15 }}>
          <Healthconcerns
            concernimage={require("./assets/hands.jpeg")}
            concern="Skin Rash"
          />
        </View>
        <View style={{ marginRight: 15 }}>
          <Healthconcerns
            concernimage={require("./assets/hands.jpeg")}
            concern="Skin Rash"
          />
        </View>
        <View style={{ marginRight: 10 }}>
          <Healthconcerns
            concernimage={require("./assets/corona.jpeg")}
            concern="Fever"
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
        <Homebutton />
        <TouchableOpacity>
          <Image
            style={{ height: 20, width: 20, margin: 17 }}
            source={require("./assets/search.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ height: 20, width: 20, margin: 17 }}
            source={require("./assets/calendar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ height: 20, width: 20, margin: 17 }}
            source={require("./assets/user.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F7FB",
    alignItems: "center",
    justifyContent: "center",
  },
  yellow: {
    width: "100%",
    height: 210,
    backgroundColor: "#FDC662",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  blue: {
    width: "100%",
    height: 200,
    backgroundColor: "#52B8B8",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  topmost: {
    flexDirection: "row",
  },
  shadows1: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 20 },
    borderRadius: 30,
    marginTop: 42,
    marginLeft: 50,
    height: 40,
    width: 115,
  },
  shadows7: {
    shadowOpacity: 0.5,
    elevation: 4,
    shadowRadius: 10,
    shadowOffset: { width: 56, height: 20 },
    borderRadius: 25,
    shadowColor: "white",
    marginTop: -5,
    height: 30,
    width: 115,
  },
  locationbox: {
    overflow: "hidden",
    borderRadius: 30,
    flexDirection: "row",
    backgroundColor: "#52B8B8",
    borderColor: "black",
    marginTop: 5,
  },

  shadows2: {
    height: 80,
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 20 },
    borderRadius: 40,
    marginTop: -60,
    shadowColor: "#52B8B8",
    width: "95%",
  },

  searchbox: {
    margin: 2,
    marginTop: 16,
    backgroundColor: "#EDF4F6",
    height: 56,
    flexDirection: "row",
    borderRadius: 40,
    width: "96%",
    marginLeft: 7,
  },
  booknow: {
    backgroundColor: "white",
    height: 30,
    width: 100,
    alignItems: "center",
    borderRadius: 40,
    marginTop: 5,
    marginLeft: 5,
  },
  shadows3: {
    marginLeft: 150,
    marginTop: -36,
    height: 36,
    width: 110,
    shadowOpacity: 0.5,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 20 },
    shadowColor: "black",
    shadowRadius: 40,
    borderRadius: 30,
  },
  doctorbar: {
    height: 90,
    backgroundColor: "#52B8B8",
    borderRadius: 20,
    width: "87%",
    marginTop: 35,
  },
  shadows5: {
    shadowOpacity: 0.5,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 20 },
    shadowColor: "black",
    borderRadius: 25,
  },
  servicebar: {
    backgroundColor: "#F5F7FB",
    flexDirection: "row",
    height: 60,
    width: 150,
    borderRadius: 25,
  },
  shadows6: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 65, height: 110 },
    borderRadius: 50,
  },
  concernbox: {
    flexDirection: "column",
    height: 110,
    width: 65,
    backgroundColor: "#FEFEFE",
    borderRadius: 40,
  },
  shadows4: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 20 },
    borderRadius: 40,
    width: 105,
    marginRight: 60,
    height: 35,
    marginTop: 10,
  },
  finalbox: {
    backgroundColor: "#F8FAF9",
    height: 35,
    width: 100,
    flexDirection: "row",
    borderRadius: 40,
    marginRight: 60,
  },
});

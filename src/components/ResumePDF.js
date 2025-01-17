import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 20,
    backgroundColor: "#1a202c", // Darkish background color for the page
  },
  section: {
    marginBottom: 10,
    backgroundColor: "#2d3748", // Colorful background for sections
    padding: 10,
    borderRadius: 4,
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    borderBottom: "1 solid black",
    color: "#fff", // White text color for headings
  },
  subheading: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#e2e8f0", // Light text color for subheadings
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
    color: "#e2e8f0", // Light text color for regular text
  },
});

const ResumePDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>Personal Information</Text>
          <Text style={styles.subheading}>Syed Shahbaz Raza</Text>
          <Text style={styles.text}>+92 314-4020572</Text>
          <Text style={styles.text}>shahbazraza1234@gmail.com</Text>
          <Text style={styles.text}>github.com/shahbaz-raza5</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Professional Experience</Text>
          <Text style={styles.subheading}>Frontend Developer</Text>
          <Text style={styles.text} color="gray.400">
            Freelancer | January 2020 - Present
          </Text>
          <Text style={styles.text}>
            - Design and develop user interfaces for websites and applications using technologies such as JavaScript, React.js, jQuery, Chakra UI, Bootstrap, and WordPress.
          </Text>
          <Text style={styles.text}>
            - Build mobile applications using React Native Expo, implementing intuitive user interfaces and seamless cross-platform performance.
          </Text>
          <Text style={styles.text}>
            - Familiarity with the MERN stack (MongoDB, Express.js, React.js, Node.js) and the ability to develop full-stack applications.
          </Text>
          <Text style={styles.text}>
            - Excellent problem-solving skills and the ability to debug and resolve frontend-related issues efficiently.
          </Text>
          <Text style={styles.text}>
            - Self-motivated and proactive attitude towards learning new technologies and staying updated with industry trends.
          </Text>
          <Text style={styles.text}>
            - Ability to work independently and manage multiple projects simultaneously while meeting deadlines.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.subheading}>Bachelor's Degree in Computer Science</Text>
          <Text style={styles.text} color="gray.400">
            Federal Urdu University of Arts Science and Technology Islamabad | Graduation Year Aug 2016
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.text}>
            HTML, CSS, JavaScript, React, React Native Expo, Bootstrap, Chakra, Node.js, Express, MongoDB, Troubleshooting, IT Infrastructure
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Hobbies</Text>
          <Text style={styles.text}>
            - Cricket: Enjoy playing and watching cricket, a sport that combines athleticism and strategy.
          </Text>
          <Text style={styles.text}>
            - Reading History: Fascinated by historical events and love exploring different eras through books.
          </Text>
          <Text style={styles.text}>
            - Hiking: Find solace in nature and enjoy exploring scenic trails and mountains.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
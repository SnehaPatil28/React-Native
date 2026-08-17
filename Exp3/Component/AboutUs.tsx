import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

function AboutUs() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        About Our College
      </Text>

      <Text style={styles.paragraph}>
        Our college is a center of learning, innovation, and
        personal development. We provide students with a
        supportive environment for academic growth.
      </Text>

      <Text style={styles.paragraph}>
        The college offers undergraduate and postgraduate
        programs in various fields of education and technology.
        Students can choose programs according to their interests.
      </Text>

      <Text style={styles.paragraph}>
        Our experienced faculty members guide students throughout
        their academic journey and encourage them to develop
        practical and professional skills.
      </Text>

      <Text style={styles.paragraph}>
        The college provides modern classrooms, laboratories,
        libraries, and other facilities that support effective
        teaching and learning.
      </Text>

      <Text style={styles.paragraph}>
        Students are encouraged to participate in technical
        competitions, workshops, seminars, and other activities
        to gain practical experience.
      </Text>

      <Text style={styles.paragraph}>
        The college also promotes innovation and entrepreneurship
        by encouraging students to work on projects and develop
        creative solutions to real-world problems.
      </Text>

      <Text style={styles.paragraph}>
        Various cultural and sports activities are organized
        throughout the academic year to encourage teamwork,
        creativity, leadership, and confidence.
      </Text>

      <Text style={styles.paragraph}>
        Our college focuses on developing communication skills,
        problem-solving abilities, and professional knowledge
        required for successful careers.
      </Text>

      <Text style={styles.paragraph}>
        Students also get opportunities to interact with
        industry professionals through guest lectures, internships,
        training programs, and placement activities.
      </Text>

      <Text style={styles.paragraph}>
        Our goal is to create responsible, skilled, and confident
        graduates who can contribute positively to society and
        succeed in their chosen careers.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightyellow',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  paragraph: {
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 18,
    textAlign: 'justify',
  },
});

export default AboutUs;
# Use an official OpenJDK runtime with Java 21 as a parent image
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

COPY src ./src
COPY pom.xml ./pom.xml
RUN ./mvnw clean package

# Copy the JAR file into the container
#COPY target/rc4-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/rc4-0.0.1-SNAPSHOT.jar"]
# iGP Backend Development Assignment

During my tenure working on this assignment for the innovative firm, **iGP**, I meticulously strategized and executed a comprehensive backend architecture. My initial approach revolved around a traditional monolithic framework. However, after evaluating the broader scope and potential scalability requirements, I gravitated towards a microservices architecture.

## Project Overview

The core application is delineated into two primary microservices, each tailored for a distinct functionality:

### 1. Authentication Service

Responsible for all user-centric operations, the Authentication Service integrates:

- **User Registration**: Streamlined registration processes for new users.
- **User Login**: Secure and efficient user login mechanisms.
- **User Data Manipulation**: Providing users with the capability to update or delete their account information.
- **User Profiles**: Comprehensive CRUD operations to manage user profiles.

**Postman Documentation**: [Auth Service API Documentation](https://documenter.getpostman.com/view/9685545/2s9YR56uvW)

### 2. Notification Service

Designed to emulate the mechanism of dispatching notifications to targeted users, the Notification Service is a REST API-centric system. It dispatches data to a Redis Pub/Sub mechanism, which in turn can be consumed by other services, including the Authentication Service.

**Postman Documentation**: [Notifications Service API Documentation](https://documenter.getpostman.com/view/9685545/2s9YR56uvX)

## Technology Stack

The selection of the technological stack was governed by the principles of efficiency, scalability, and maintainability:

- **Node.js**: An agile and robust JavaScript runtime environment.
- **TypeScript**: Infusing static typing to amplify the JavaScript development experience.
- **Nodemon**: Augmenting the development workflow by auto-reloading code changes.
- **Redis**: Employed as the Pub/Sub medium for inter-service communications.
- **MongoDB**: A potent NoSQL database choice for efficient data management.
- **Docker**: Ensuring consistent microservice behavior across environments via containerization.
- **Kubernetes (K8s)**: An orchestration tool for Docker containers, simplifying deployment and operational management.

## Additional Features

Incorporated within this project are several distinguished features:

- **Email Mocking**: To maintain a balance between functionality and simplicity, I simulated the email mechanism. Newly registered users receive a console-based "welcome email" message.
  
- **Skaffold for CI/CD**: To elevate the Kubernetes-based Continuous Integration and Continuous Deployment (CI/CD) experience, Skaffold was integrated. This ensures the Kubernetes pods remain synchronized with the latest code iterations.

## Starting the Project

To kickstart the project and have all services up and running inside the Kubernetes cluster, follow the steps below:

1. Ensure `skaffold` is installed on your machine.
2. Navigate to the project directory.
3. Run the following command:

    ```bash
    skaffold dev
    ```

This command will start Skaffold, which will build your images, deploy your manifests to the Kubernetes cluster, and watch for changes in your source code and Kubernetes manifests.

## Future Discussions and Iterations

The journey from a monolithic to a microservices infrastructure was enlightening. I eagerly anticipate diving into discussions around potential optimizations and enhancements for this application. For any insights, feedback, or innovative project ideas, I encourage an open dialogue.

For inquiries or additional details concerning my work on this assignment, I remain at your service.

Warm regards,

Stefan Mijic  
[stefanmijic30@gmail.com](mailto:stefanmijic30@gmail.com)

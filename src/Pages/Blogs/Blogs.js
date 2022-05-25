import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h5><strong>QN-1: </strong>How will you improve the performance of a React Application?</h5>
                        <p>
                            <strong>Ans: </strong>
                            When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5><strong>QN-2: </strong>What are the different ways to manage a state in a React application?</h5>
                        <p>
                            <strong>Ans: </strong>
                            The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.
                            There are four main types of state you need to properly manage in your React apps:
                            Local state, Global state, Server state, URL state.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5><strong>QN-3: </strong>How does prototypical inheritance work?</h5>
                        <p>
                            <strong>Ans: </strong>
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5><strong>QN-4: </strong>Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`?</h5>
                        <p>
                            <strong>Ans: </strong>
                            This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.The only argument to the useState() Hook is the initial state.It returns a pair of values: the current state and a function that updates it.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5><strong>QN-5: </strong>What is a unit test? Why should write unit tests?</h5>
                        <p>
                            <strong>Ans: </strong>
                            Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.

                            Unit tests help to fix bugs early in the development cycle and save costs. It helps the developers to understand the testing code base and enables them to make changes quickly. Good unit tests serve as project documentation. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;
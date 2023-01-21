// import { Hello } from "./Hello";
import React from "react";
import { Container } from "./Container";
// import { Form } from "./Form";
// import { Sum } from "./Sum";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { LanguageContext } from "./LanguageContext";
// import { TodoList } from "./TodoList";
// import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";

// const todos = [
//   { id: 1, title: "Call Katherine about the trip", completed: false },
//   { id: 2, title: "Buy tickets", completed: true },
//   { id: 3, title: "Finish the presentation", completed: false },
//   { id: 4, title: "Invite John", completed: true },
//   { id: 5, title: "Rent a car", completed: false },
// ];

export class App extends React.Component {
  // defaultLoginStatus = {
  //   status: "failure!",
  // };

  state = {
    language: "en",
  };

  handleLanguageSwitch = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {/* <select
          value={this.state.language}
          onChange={this.handleLanguageSwitch}
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="some">Some Language</option>
        </select> */}
        <Container title="My App Title">
          {/* <Sum /> */} {/* Proper Way */}
          {/*<Sum numbers={undefined} /> */} {/* First Way */}
          {/* <Sum numbers={[1, 2, 3, 4, 5]} /> */} {/* Second Way */}
          {/* <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage />
          </LanguageContext.Provider> */}
          {/* <Hello /> */}
          {/* <GithubUser /> */}
          <GithubUser username="ibrahimusluu" />
          {/* <GithubUserList usernames={["test", "test2"]} /> */}
          <GithubUserList />
          {/* <Form /> */}
          {/* <Counter
            initialValue={5}
            incrementAmount={2}
            incrementInterval={2000}
          /> */}
          {/* <Counter /> */}
          {/* <ClickTracker /> */}
          {/* <InteractiveWelcome /> */}
          {/* <Login login="test" /> */}
          {/* <UncontrolledLogin login={this.defaultLoginStatus} /> */}
          {/* <TodoList
          // items = this.state.item
          render={(items, handleEvent) => {
            console.log(items);
            // console.log(handleEvent);
            return (
              <ul>
                {items.map((item, index) => (
                  <li key={item.id}>
                    {item.title}
                    <button
                      className="remove_buttons"
                      // onClick={() => this.handleClickRemoveButton(index)}
                      onClick={() => handleEvent(index)}
                      // onClick={(e) => {
                      //   this.handleClickRemoveButton(e.target);
                      // }}
                    >
                      Remove the Item
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        ></TodoList> */}
          {/* Second Way */}
          {/* <TodoList
        // items = this.state.item
        >
          {(items, handleEvent) => {
            console.log(items);
            // console.log(handleEvent);
            return (
              <ul>
                {items.map((item, index) => (
                  <li key={item.id}>
                    {item.title}
                    <button
                      className="remove_buttons"
                      // onClick={() => this.handleClickRemoveButton(index)}
                      onClick={() => handleEvent(index)}
                      // onClick={(e) => {
                      //   this.handleClickRemoveButton(e.target);
                      // }}
                    >
                      Remove the Item
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        </TodoList> */}
        </Container>
      </div>
    );
  }
}

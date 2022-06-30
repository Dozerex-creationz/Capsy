import { combineReducers } from "redux";

const userState = {
  data: {
    userName: "Dummy",
    email: "Dummy@gmail.com",
  },
  bookings: [
    {
      id: 1,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 2,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 3,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 4,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 5,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 6,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 7,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 8,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 9,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 10,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 11,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 12,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 13,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 14,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 15,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
    {
      id: 16,
      from: "2018-01-01 16:00",
      to: "2018-01-03 16:00",
      location: "mumbai",
      capsule: "capstone hotel",
    },
  ],
};

const bookState = {
  menuItem: [
    { id: "0", label: "Book Capsules", option: "book" },
    { id: "1", label: "Bookings", option: "details" },
    { id: "2", label: "Profile", option: "history" },
    { id: "3", label: "FAQ & Help", option: "help" },
    { id: "4", label: "Log Out", option: "logout" },
    { id: "5", label: "Cancel", option: "cancel" },
  ],
  city: [
    { id: "0", label: "Chennai" },
    { id: "1", label: "Mumbai" },
    { id: "2", label: "Tirupur" },
    { id: "3", label: "Madurai" },
    { id: "4", label: "Kolkata" },
    { id: "5", label: "Vellore" },
    { id: "6", label: "Kancheepuram" },
    { id: "7", label: "Karachi" },
    { id: "8", label: "Hyderabad" },
    { id: "9", label: "Delhi" },
    { id: "10", label: "Coimbatore" },
  ],
  hotel: [
    { id: "0", label: "Le Capsule", cost: "₹420" },
    { id: "1", label: "Merry Born", cost: "₹420" },
    { id: "2", label: "Thangabali", cost: "₹420" },
    { id: "3", label: "Malliga", cost: "₹420" },
    { id: "4", label: "Koffee", cost: "₹420" },
    { id: "5", label: "Vacant", cost: "₹420" },
    { id: "6", label: "Kanchee", cost: "₹420" },
    { id: "7", label: "Kachcha", cost: "₹420" },
    { id: "8", label: "Hyderagood", cost: "₹420" },
    { id: "9", label: "Cleaner Delhi", cost: "₹420" },
    { id: "10", label: "La Comiyambatore", cost: "₹420" },
  ],
};
const statusState = {
  currentMenu: "book",
  voiceMenu: bookState.menuItem,
  signOpen: false,
  loggedIn: false,
  voiceOpen: false,
};
const activeStepState = {
  activeStep: 0,
};

const bookingState = {
  city: null,
  hotel: { id: "-1", label: "None", cost: "₹0" },
};
const activeStepReducer = (state = activeStepState, action) => {
  if (action.type === "activeStep") {
    return {
      activeStep: action.payload,
    };
  }
  return state;
};

const userReducer = (state = userState, action) => {
  return state;
};
const bookReducer = (state = bookState, action) => {
  return state;
};
const bookingReducer = (state = bookingState, action) => {
  if (action.type === "city") {
    return {
      city: action.payload,
      hotel: state.hotel,
    };
  }
  if (action.type === "hotel") {
    return {
      city: state.city,
      hotel: action.payload,
    };
  }
  if (action.type === "cityHotelNull") {
    return bookingState;
  }

  if (action.type === "logout") {
    return bookingState;
  }
  return state;
};
const statusReducer = (state = statusState, action) => {
  if (action.type === "menuChange") {
    return {
      currentMenu: action.payload,
      voiceMenu: state.voiceMenu,
      signOpen: state.signOpen,
      loggedIn: state.loggedIn,
      voiceOpen: state.voiceOpen,
    };
  }
  if (action.type === "voice2Start") {
    return {
      currentMenu: state.currentMenu,
      voiceMenu: bookState.menuItem,
      signOpen: false,
      loggedIn: state.loggedIn,
      voiceOpen: false,
    };
  }
  if (action.type === "logIn") {
    return {
      currentMenu: state.currentMenu,
      voiceMenu: state.voiceMenu,
      signOpen: !action.payload,
      loggedIn: action.payload,
      voiceOpen: state.voiceOpen,
    };
  }
  if (action.type === "logout") {
    return statusState;
  }
  if (action.type === "signOpen") {
    return {
      currentMenu: state.currentMenu,
      voiceMenu: state.voiceMenu,
      signOpen: action.payload,
      loggedIn: state.loggedIn,
      voiceOpen: state.voiceOpen,
    };
  }
  if (action.type === "voice") {
    return {
      currentMenu: state.currentMenu,
      voiceMenu: state.voiceMenu,
      signOpen: state.signOpen,
      loggedIn: state.loggedIn,
      voiceOpen: action.payload,
    };
  }
  if (action.type === "voiceMenu") {
    return {
      currentMenu: state.currentMenu,
      voiceMenu: action.payload,
      signOpen: state.signOpen,
      loggedIn: state.loggedIn,
      voiceOpen: state.voiceOpen,
    };
  }
  return state;
};
const rootReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
  book: bookReducer,
  booking: bookingReducer,
  activeStep: activeStepReducer,
});
export default rootReducer;

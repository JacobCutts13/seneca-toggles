# https://jacobs-seneca-toggles.netlify.app/

## Assumptions: 

- Each question set is stored with a unique id.
- Questions stored in Json format. The 0 Id option is the correct option.

## Limitations
- Chose to use plain CSS instead of a framework 
- Only three levels of tile themes can make sets with >4 questions harder.
- Chose to import and set questions sets in the highest level compoenent. This was to mimic getting Qs from the API but perhaps the component could instead be passed an array of questions sets to make it easily reusable. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


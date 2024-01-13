import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMetUpPage(){
    function addMeetupHandler(enteredMeetupData){
       console.log(enteredMeetupData);
    }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
};

export default NewMetUpPage;
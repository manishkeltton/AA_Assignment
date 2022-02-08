export let Validate = inputValue => {
    console.log("validate => ", inputValue);
    const re = /^[0-9\b]+$/;
    let errors={};
    if(inputValue.first_name.trim().length<5 ){
        errors.first_name="Enter min 5 char";
    }
    if(inputValue.last_name.trim().length<5 ){
        errors.last_name="Enter min 5 char";
    }
    if(inputValue.phone === ''|| re.test(inputValue.phone)){
        errors.phone = "Enter numeric number"
    }
    return errors;
}
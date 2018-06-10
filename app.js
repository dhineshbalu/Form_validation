$(document).ready(function()
{
   
    $("#call").click(function()
    { 
        var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var code = $("#code").val();
    var blood = $("#blood").val();
    var date = $("#date").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();

    var value1=false;
    var value2=false;
    var value3=false;
    var value4=false;
    var value5=false;
    var value6=false;
    var value7=false;

    
       /* if(checkFirstName(firstname)==true )
        {
    
            if(checkLastName(lastname)==true)
            {
              
                doProcess();
            }
            else
            {
                errorLastName();
            }
        }
        else if(checkLastName(lastname)==false)
        {
            errorFirstName();
            errorLastName();
        }
        else
        {
            errorFirstName(); 
        }*/

        if(checkFirstName(firstname)=="")
        {
            first_error();
        }
        else if(checkContainsNumber(firstname))
        {
      
            containsNumber1_error();
        }
        else
        {
         value1=true;
        }

       if(checkLastName(lastname)=="")
       {
           last_error();
       }
       else if(checkContainsNumber(lastname))
       {
  
           containsNumber2_error();
       }
       else
       {
        value2=true;
       }

       if(checkCode(code)=="")
       {
         code_error();
       }
       else if(checkLength(code) && checkLetters(code))
       {
        if(checkLength(code))
           length_error();

           if(checkLetters(code))
           letters_error();
       }
       else if(checkLetters(code))
       {
         
         letters_error();
       }
       else if(checkLength(code))
       {
        length_error();
       }
       else
       {
           value3=true;
       }

       if(checkBlood(blood)=="")
       {
           blood_error();
       }
       else if(checkBloodLength(blood))
       {
       bloodLength_error();
       }
       else 
       {
           value4=true;
       }

       if(checkDate(date)=="")
       {
           date_error();
       }
       else 
       {
           value5=true;
       }

       
       if(checkEmail(email)=="")
       {
           email_error();
       }
       else if(checkVirtusa(email))
       {
           virtusa_error();
       }
       else 
       {
           value6=true;
       }

       if(checkMobile(mobile)=="")
       {
           mobile_error();
       }
       else if(checkMobileLength(mobile))
       {
         MbLength_error();
       }
       else 
       {
           value7=true;
       }

       

       if(value1==true && value2==true  && value3==true  && value4==true && value5==true && value6==true && value7==true )
       {
           doProcess();
       }

    });

    function checkFirstName(firstname)
    {
        
        if(firstname!=""){
            $("#first_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }



    }
    function checkLastName(lastname)
    {
        if(lastname!=""){
            $("#last_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }
    }

    function checkCode(code)
    {
        if(code!=""){
            $("#code_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }
    }

    function checkBlood(blood)
    {
        if(blood!=""){
            $("#blood_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }
    }

    function checkDate(date)
    {
        if(date!=""){
            $("#date_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }
    }

    function checkEmail(email)
    {
        if(email!=""){
            $("#email_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }
    }

    
    function checkMobile(mobile)
    {
        if(mobile!=""){
            $("#mobile_error").text(" ");
            return true;
          
        }
        else{
            return false;
        }
    }

    function checkContainsNumber(firstname)
    {
        for(var i=0;i<firstname.length;i++)
        {
            if(firstname[i]>="0" && firstname[i]<="9")
               return true;
        }
        return false;
    }
    function checkLength(code)
    {
       if(code.length!=7)
       {
           return true;
       }
       return false;
    }
    function checkLetters(code)
    {
       for(var i=0;i<code.length;i++)
       {
           if(code[i]<"0" || code[i]>"9")
           {
               return true;
           }
       }
       return false;
    }
    function checkBloodLength(blood)
    {
        if(blood.length>3)
        return true;
        else
        return false;
    }
    function checkVirtusa(email)
    {
     var s = email.substring(email.length-12,email.length);
      if(s!="@virtusa.com")
      {
          return true;
      }
      else
      {
          return false;
      }
    }

    function checkMobileLength(mobile)
    {
       if(mobile.length != 10)
       {
           return true;
       }
       else
       {
           return false;
       }
    }

    function first_error()
    {
    
        $("#first_error").text("first name is required");
    }
    function last_error()
    {
        $("#last_error").text("last name is required");
    }
    function blood_error()
    {
        $("#blood_error").text("blood group is required");
    }
    function code_error()
    {
        $("#code_error").text("employee code is required");
    }
    function date_error()
    {
        $("#date_error").text("date  is required");
    }
    function email_error()
    {
        $("#email_error").text("Email Id  is required");
    }
    function mobile_error()
    {
        $("#mobile_error").text("Mobile number   is required");
    }
    function containsNumber1_error()
    {
        $("#first_error").text("No number to be used ");
    }
    function containsNumber2_error()
    {
        $("#last_error").text("No number to be used ");
    }
    function length_error()
    {
        $("#code_error").text("employee length should be seven");
    }
    function letters_error()
    {
        $("#code_error").text("employee code doesnt contain letters");
    }
    function bloodLength_error()
    {
        $("#blood_error").text("blood group is not correct"); 
    }
    function virtusa_error()
    {
        $("#email_error").text("Email Id  is not valid");
    }
    function MbLength_error()
    {
        $("#mobile_error").text("Mobile number Length should be 10");
    }

    function doProcess()
    {
        const data = {
             firstname: $("#firstname").val(),
             lastname: $("#lastname").val()
        };
        $.ajax({
            type:"POST",
            url: "https://form-ae839.firebaseio.com/form-data.json", 
            data: JSON.stringify(data),
            success: function(result) 
            {
               console.log(result);
           },
           error: (err) => {
            console.log('In error callback');
            console.log(err);
        }
    });
    }
});

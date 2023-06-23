//! lesson-0
  //? Variables
  /*
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function

    Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function

    Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
  */
//! lesson-1
  //? Comments
    //* there is many method to type comment in js 
      // => /**/
      // => //
//! lesson-2
  //? Output In Screen 
    //* there is many methods to output contant [console, window, document]
      //\ "console.log('your output')"
      //\ "window.alert('your output')"
      //\ "document.write('your output')"
//! lesson-3
  //? Arithmetic Operators
    //\ +  Addition
    //\ -  Subtraction
    //\ *  Multiplication
    //\ /  Division
    //\ ** Exponentiation
    //\ %  Modulus
    //\ ++ Increment [Pre / Post]
    //\ -- Decrement [Pre / Post]
//! lesson-4
  //? Unary Operators
    //\ + Use It To Convert String To Positive Number
    //\ + Use It To Convert String To Negative Number
//! lesson-5
  //? Numbers
    //\ 10e6                  => 1000000
    //\ 1000_000              => 1000000
    //\ Number.MAX_VALUE      => Max Value In JS
    //\ Number.MAX_SAFE_VALUE => Max Safe Value In JS
//! lesson-6
  //? Numbers Methods 
    //* .toString('number')
      //\ This Method Will Convert String to Number If Can
    //* .toFixed(number)
      //\ This Method Will Return Fixed Numbers After .
    //* parseInt('int str')
      //\ This Method Will Return Integer From String
    //* parseFloat('float str')
      //\ This Method Will Return Float From String
    //* Number.isInteger('int')
      //\ This Method Will Tell You If Input Integer Or No
    //* Number.isNaN('int')
      //\ This Method Will Tell You If Input NaN Or No
//! lesson-7
  //? Math Object
    //* Math.round(int) => Will Round int
    //* Math.ceil(int) => Will Round Up int
    //* Math.floor(int) => Will Round Down int
    //* Math.max(int, int, int) => Will Return Max Value
    //* Math.min(int, int, int) => Will Return Min Value
    //* Math.random() => Will Generate Random Number
    //* Math.trunc(float) => Will Return Integer Only And Ignore Float
    //* Math.pow(2, 2) => 2^2
//! lesson-8
  //? String Methods
    //* .charAt(int)
      //\ Will Return Character Has Index int
    //* .length
      //\ Will Return String Length
    //* .trim()
      //\ Will Remove Spaces From String
    //* .toUpperCase()
      //\ Will Convert String To UpperCase
    //* .toLowerCase()
      //\ Will Conver String To LowerCAse
    //* .indexOf(str, start)
      //\ Will Return Index of str
    //* .lastIndexOf(str, start)
      //\ Will Return Index Of str But Will Start From Back
    //* .slice(star, end)
      //\ Will Return Slice From Your String
    //* .repeat(Times)
      //\ Will Repeat You String To Times
    //* .split(sep, limit)
      //\ Will Split Your String By sep To limit Times
    //* String.substring(startIndex, endIndex)
      //\ Will Return Slice From `String`
    //* String.substr(startIndex, lengthOfChars)
      //\ Will Return Slice From `String`
    //* String.includes("Something") => Bool
      //\ Will Check If `String` Include `Something`
    //* String.startsWith('Something', startIndex) => Bool
      //\ Will Check If String Starts With `Something` //? And Will Start From startIndex
    //* String.endsWith('Something') => Bool
      //\ Will Check If String Ends With `Something`
switch 
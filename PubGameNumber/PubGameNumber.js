
$(document).ready(function(){

	function isPrime(a){
		var number = parseInt(a);
		
		for(var i = 2; i <= number/2; i++){
			if((number % i == 0)){
				return false;
			}else{
				return true;
			};
		};
	};
	
	function isNumberMultiple(a,b){
		var number = parseInt(a);
		var digit = parseInt(b);
		
		return number % digit == 0;	
	};
	
	function isNumberContain(a,b){
		var number = parseInt(a);
		var digit = parseInt(b);
		
		while(number > 0){
			var lastDigit = number % 10;

            if (lastDigit === digit){
				return true;
			};
            number = parseInt(number / 10);	
		};
        return false	
	};

	function isEven(a){
		var number = parseInt(a);
		return number % 2 == 0;
	};

	
	function checkNumbers(a,b,c){

		var start 	= parseInt(a);
		var stop 	= parseInt(b);
		var digit 	= parseInt(c);
		
		var evenNumber 	= "";
		var primeNumber		= "";
		var numberMultiple	= "";
		var numberContain	= "";
		var legalNumber 	= "";

		for(var i = start; i <=stop; i++){

			if(isEven(i)){
				evenNumber += (i + ", ");
				};

			if(isPrime(i)){
				primeNumber += (i + ", ");
				};
			
			if(isNumberContain(i,digit)){
				numberContain += (i + ", ");
				};

			if(isNumberMultiple(i,digit)){
				numberMultiple += (i + ", ");
				};

			if( !isPrime(i) && 
				!isNumberMultiple(i,digit) && 
				!isNumberContain(i,digit)	&&
				!isEven(i)){

					legalNumber += (i + ", ");
					};	
		};

		$(	"#legalNumberResult"	).prepend(
			legalNumber + "<br>"
		);

		$(	"#primeNumberResult"	).prepend(
			primeNumber + "<br>"
		);

		$(	"#multiNumberResult"	).prepend(
			numberMultiple + "<br>"
		);

		$(	"#containNumberResult"	).prepend(
			numberContain + "<br>"
		);


	};

	
	$(	"#button"	).click(function(){
		
		checkNumbers( 	$(	"#inputStart"	).val(),	
						$(	"#inputStop"	).val(),	
						$(	"#inputDigit"	).val()	);
			
	});
});

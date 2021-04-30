Feature: Test online calculator scenarios
Scenario Outline: Test subtraction, division and CE functionalities
Given Open chrome browser and start application
When I enter following values and press CE button
            |field    | value     |
			|key1     | <value1>  |
			|operator | <operator>|
			|key2     | <value2>  |
						
Then I should be able to see
			|field 		 | value    |
			|	expected |<expected>|
Examples:
		| value1  		| operator	| value2 		| expected	|
    	| 	6 			|		/	|   3			| 2			|
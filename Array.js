            var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
		document.write("<b>Using for loops </b><br />");
		for (i=0;i<students.length;i++)
		{
		document.write(students[i] + "<br />");
            }
            
            document.write("<b>Using do...while loops </b><br />");
		var i = 0;
		document.write("Even numbers less than 18<br />");
		do
		{
			document.write(i + "<br />");
			i = i + 0;
		}while(i<18)

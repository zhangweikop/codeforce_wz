import java.util.ArrayList;


public class RecurringDecimal {
	public String fractionToDecimal(int numerator, int denominator)
	{
		return fractionToDecimalL(numerator, denominator);
	}
	 public String fractionToDecimalL(long numerator, long denominator) {
	   
	   
		 if(numerator >0 && denominator<0)
	     {
	    	 return "-"+fractionToDecimalL(numerator, 0-denominator);
	     }
	     if(numerator <0 && denominator>0)
	     {
	    	 return "-"+fractionToDecimalL(0-numerator, denominator);
	     }
		 long d = numerator/denominator;
		 long remaining = numerator%denominator;
		 if(remaining == 0)
		  {
			 return ""+d;
		  }
		 int i = 0;
		 long a = remaining;
		 long b = denominator;
		 for( i =2 ; i<=remaining/2; i++)
		 {
			 if(a%i ==0 && b% i==0)
			 {
				 a= a /i;
				 b= b/i;
				 i--;
			 }
		 }
		 
		     if(d== Integer.MAX_VALUE)
		     {
		    	 return d+"";
		     }
		     if(d == Integer.MIN_VALUE)
		     {
		    	 return d+"";
		     }
		     if(numerator <0 && denominator<0)
		     {
		    	 return fractionToDecimalL(0-numerator, 0-denominator);
		     }
		 
		 if(infinite(b))
		 {
			 try {
				return d+"."+solveProblem(a, b);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				return "Error";
			}
		 }
		 else
		 {
			 String r = d+".";
			 long f= a;
			 while(f!=0)
			 {
				 f = f * 10;
				 if(f>b)
				 {
					 
					 r+= f/b;
					 f = f%b;
				 }
				 else{
					 r+="0";
				 }
				 
			 }
			 return r;
		 }
	    }
	 // string = a/b < 1.0
	 public boolean infinite(long b)
	 {
		 while(b>1)
		 {
			 if(b%2  == 0)
			 {
				 b=b/2;
			 }else
			 if(b%5 == 0)
			 {
				 b= b/5;
			 }else{
				 return true;
			 }
		 }
		 return false;
	 }
	 
	 public String solveProblem(long a , long b) throws Exception
	 {
		 ArrayList<Long>  history = new ArrayList<Long> ();  
		 boolean found = false;
		 long t = a;
		 String r = "";
		 while(!found)
		 {
			 t = t*10;
			 if(history.contains(t))
			 {
				 int index = history.indexOf(t);
				 String rr = r.substring(0, index);
				 rr+="(";
				 rr += r.substring(index, r.length());
				 rr+=")";
				 return rr;
			 }
			 history.add(t);

			 if(t>b)
			 {
				 r += t/b;
				 t = t%b;
			 }else{
				  r +="0";
				  
			 }
		 }
		 throw new Exception();
		 
	 }

	 public static void main(String [] args)
	 {
		 RecurringDecimal R = new RecurringDecimal();
		  System.out.println(R.fractionToDecimal(7, -12));
	  System.out.println(R.fractionToDecimal(-2147483648, 1));

	  System.out.println(R.fractionToDecimal(1, 90));

	  System.out.println(R.fractionToDecimal(23, 15));

	 }
}

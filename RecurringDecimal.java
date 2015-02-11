import java.util.ArrayList;
import java.util.HashSet;


public class RecurringDecimal {
	 public String fractionToDecimal(int numerator, int denominator) {
	     
		 int d = numerator/denominator;
		 int remaining = numerator%denominator;
		 if(remaining == 0)
		  {
			 return ""+d;
		  }
		 int i = 0;
		 int a = remaining;
		 int b = denominator;
		 for( i =2 ; i<=remaining/2; i++)
		 {
			 if(a%i ==0 && b% i==0)
			 {
				 a= a /i;
				 b= b/i;
				 i--;
			 }
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
			 int f= a;
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
	 public boolean infinite(int b)
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
	 
	 public String solveProblem(int a , int b) throws Exception
	 {
		 ArrayList<Integer>  history = new ArrayList<Integer> ();  
		 boolean found = false;
		 int t = a;
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
			 if(t>b)
			 {
				 history.add(t);
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
		 System.out.println(R.fractionToDecimal(1, 2));
		 System.out.println(R.fractionToDecimal(3, 4));

		 System.out.println(R.fractionToDecimal(1, 7));

		 System.out.println(R.fractionToDecimal(23, 15));

	 }
}

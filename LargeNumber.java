import java.util.*;

public class LargeNumber {
	   public String largestNumber(int[] num) {
		   Comparator<Integer> co = new Comparator<Integer>(){

			@Override
			public int compare(Integer arg0, Integer arg1) {
				// TODO Auto-generated method stub
				//if(arg0)
				int a = arg0;
				int b = arg1;
				int [] adigits = new int[10];
				int [] bdigits = new int[10];
				int i = 0;
				if(a*b ==0)
				{
					return a-b;
				}
				while(a/10.0>=0.1)
				{
					adigits[i] = a%10;
					a = a/10;
					i++;
				}
				int j =0;
				while(b/10.0>=0.1)
				{
					bdigits[j] = b%10;
					b = b/10;
					j++;
				}
				int al=i;
				int bl=j;
				i--;
				j--;
				int l=0;
				while(i>=0 && j>=0 &&(adigits[i]==bdigits[j]))
				{
					l++;
					i--;
					j--;
				}
				if(l==0)
				{
					return adigits[al-1]-bdigits[bl-1];
				}
				if(al==bl)
				{
					if(i<0)
					{
						return 0;
					}
					if(i>=0)
					{
						int msb = adigits[i]-bdigits[j];
						return msb;
					}
				}
		
				else
				{
					if(i>=0 && j>=0)
					{
						 return (adigits[i]-bdigits[j]);							 
					}
					if(i>=0)
					{
						if(adigits[i]==0)
						{	
							return -1;
						}
						int div ;
						div = (int) Math.pow(10, al-bl);
						int rr= compare(arg0 %div,arg1);
						return rr;
					}
					if(j>=0)
					{
						if(bdigits[j]==0)
						{	
							return 1;
						}
						int div = (int) Math.pow(10,(bl-al));

						int rrr= compare( arg0, arg1%div);
						return rrr;
					}
 				}
				return 0;
			}
			   
		   };
		    Integer [] input = new Integer [num.length];
		    for(int i =0; i< num.length; i++)
		    {
		    	input[i] = num[i];
		    }
 			Arrays.sort(input, co);
 			String result = "";
 			boolean head =true;
 			int leading0 = 0;
 			for(int i =input.length-1; i>=0;i--)
 			{
 				if(head && input[i]==0)
 				{
 					leading0 ++;
 					continue;
 				}
 				head = false;
 				result += input[i];
 			}
 			if(leading0 == input.length)
 			{
 				result ="0";
 			}
	        return result;
	    }
	   
	   public static void main(String[] args)
	   {
		   LargeNumber L = new LargeNumber();
		   int[] in =  {	121,12};
		   System.out.println(L.largestNumber(in));
	   }
}

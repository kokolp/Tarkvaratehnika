package rahaplaneerija.model;

import javax.annotation.Generated;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;


@EntityScan
public class Info {
	
	        @Id
			@Generated(value = { "" })
		
			private int ID;
			private String InfoID;
			private String InfoCategory;
			private String InfoNimi;
			private double EeldatavSumm;
			private double TegelikSumm;
			private String Date;
			
			//@Column (name="InfoID")
			
			public String getInfoID() {
				return InfoID; 
				}
			@Autowired
			public void setInfoID(String InfoID)
			{
				this.InfoID = InfoID; 
			}

			//@Column (name="InfoCategory")
			
			public String getInfoCategory() {
				return InfoCategory; 
				}
			@Autowired
			public void setInfoCategory(String InfoCategory)
			{
				this.InfoCategory = InfoCategory; 
			}
			
			//@Column (name="InfoNimi")
			
			public String getInfoNimi() {
				return InfoNimi; 
				}
			@Autowired
			public void setInfoNimi(String InfoNimi)
			{
				this.InfoNimi = InfoNimi; 
			}

			//@Column (name="EeldatavSumm")
			
			public double getEeldatavSumm() {
				return EeldatavSumm; 
				}
			@Autowired
			public void setEeldatavSumm(double EeldatavSumm)
			{
				this.EeldatavSumm = EeldatavSumm; 
			}
			
			//@Column (name="TegelikSumm")
			
			public double getTegelikSumm() {
				return TegelikSumm; 
				}
			@Autowired
			public void setTegelikSumm(double TegelikSumm)
			{
				this.TegelikSumm = TegelikSumm; 
			}
			
			//@Column (name="Date")
					
					public String getDate() {
						return Date; 
						}
					@Autowired
					public void setDate(String Date)
					{
						this.Date = Date; 
					}
		

		public static void main(String[] args) {
	

		}

}

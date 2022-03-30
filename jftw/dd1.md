**ID:** dd1
**Name:** Resource Object Design
**Date Created:** {{date}}
**Time Created:** {{time}}
**Content:** 

The resource object will have several feilds. These include:
- Resource Name (required)
- Description (required)
- Picture (optional)
- Link to website (optional)
- Contact information (required)
- Demographic Attributes
	- Age
	- Gender
	- Income
	- Sexual Orientation
	- etc
- Service attributes
	- Financial assistance
	- Healthcare
	- Counseling
	- etc

Simple attributes should be able to be added dynamically by an admin

Detailed:

**Resource:** 
Name: {Type: String, Required: True}
Description: {Type: String, Required: True}
Picture: {Type: ?, Required: True, sizeLimits?}
Links: {Type: String, Required: True}
Email: {Type: String, Required: False}
PhoneNumber: {Type: String, Required: False}
DemographicAttribuites[] : {Type: DemographicAttributeID}
ServiceAttributes[]: {Type: ServiceAttributeID}

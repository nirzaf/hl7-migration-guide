# HL7 v2.8 Conformance Profile (HL7 v2.8)

## HL7 v2.8

This document contains the specifications for Version 2.8 of the Health Level Seven (HL7) Standard for electronic data exchange in all healthcare environments, with special emphasis on inpatient acute care facilities (i.e., hospitals). HL7 Version 2.8 represents HL7’s latest development efforts to the line of Version 2 Standards that date back to 1989. Version 2.8 represents a major revision to Version 2.7, refining and updating existing messages and adding new messages and domains all based upon proposals submitted and accepted by the HL7 membership. Global changes include the following: 

a) Global Changes 

* All HL7, user-defined and externally-defined tables moved to chapter 2C 
* All chapters updated to include the acknowledgement choreography in their trigger event definitions 

b) Chapter 2: 

* Added introduction of requirements for message pair definitions 
* Revised acknowledgement paradigm definitions 
* Made table changes due to regulatory requirements 
* Added explanation of group start and end segments 
* Updated table of acknowledgement choreography 
* Added statement to the effect that Acknowledgement Choreography is required to document the expected acknowledgement based on the values in MSH:15 and MSH:16. 
* Revised explanation of conformance language to provide consistent and correct usage of SHALL, MUST and MAY 
* Corrected the case for the Truncation Separator 
* Changed description for escapement of delimiters and clarification of special characters such as escape and truncation 
* Added clarification regarding the correct escapement of delimiters when used in any component 
* Updated description of the explanation of the use of the SGH and SGT segments 
* Updated the definition of conditional 
* Added clarifying text for some complex message structures as they relate to XML conventions 
* Added an explanation of sequencing 

c) Chapter 2B: 

* Updated the table (Value Set) Library Conformance Documentation Hierarchy Conformance 
* Clarified the definition and interpretation of the conformance constructs 
* Clarified the use of implementation guides and message profiles 
* Clarified the definition/relationship between MSH.21/conformance statement/message profiles 
* Removed restriction on CD data type 
* Deprecated the Universal ID types L,M, N for HD Hierarchic Designator 
* Added the restriction to NM requiring at least one digit to the left of the decimal point. 
* Added component to CWE - Display Name 
* Changed conformance length from 5 to 6 for CNN.6 Degree 
* Changed conformance length - Deleted for ED.3 Data Subtype 
* Changed conformance length - Deleted for RP.4 Subtype 
* Changed conformance length - Deleted for XON.10 Organization Identifier 

d) Chapter 2C: 

* Deprecated the Universal ID types L,M, N in Table 301 – Universal ID Type 
* Added the value 'Certified Tumor Registrar' to Table 0360 - Degree/License/Certificate 
* Added the value "Hold for Medical Review" to Table 78 - Interpretation Codes 
* Deprecated UTF 16 and UTF 32 in Table 211 - Alternate Character Sets 
* Added the new value "AC - Administration Cosigner" in Table 912 – Participation 
* Deprecation of '??' – Inappropriate use in Table 492 - Specimen Appropriateness 
* Deprecation of 'SNR' and addition of 'CFU - Centrifuged' in Table 493 - Specimen Condition 
* Addition of A, B, F and V in Table 85 - Observation result status codes interpretation 
* Addition of A,D,M,O, PL, WK in Table 924 - Cumulative Dosage Limit Added 
* Further explanation added to values in Table 557 
* Additional cleanup of tables and table numbering to ensure consistency 

e) Chapter 3: 

* Added the AUT (Authorization Record) and RF1 (Referral Information) segments to the appropriate segment groups (after insurance segments and the ROL segment). 

f) Chapter 4/4A: 

* Added the OBX segment with PID in VXU message 
* Added "BP Unique ID" field in the BTX segment 
* Enhanced ORC Placer Group data type to accommodate accession number 
* Improved the description of Placer and Filler ID optionality 
* Added quantity to RXC and RXG 
* Enhanced Order Control Codes 
* Introduced infusion segment 
* Added Timing Quantity fix to restore capability that was accidently removed 
* Introduced fasting flag in OBR 
* Introduced Order Status Update message 
* Added Donation Service (Blood Bank) trigger events, messages, and segments 
* Added additional fields to Blood Product Transfusion 
* Added the [{PRT}] segment to various ORC, OBR, OBX segments 
* Removed ORC-34 and ORC-35 in favor of TXA and OBX segments in various order messages 
* Resolved conflicting item numbers between TQ1-1 and CDO-1 
* Vaccine Administration Data 
* Corrected VXU structure to align with base structures 
* Added definition for RXV-22 Action Code to align with other related fields 
* Added missing segment CDO - Cumulative Dose Limitation Segment 
* Updated all message structures, as appropriate, to: include CDO segment; include ARV relative to PV1/PV2 and PID/PD1 

g) Chapter 5: 

* Updated definitions of QBP^Q11, QBP^Q15 and RSP^K11 for consistency 
* Updated the ORU^R01 Structure Table to align with the structure in Chapter 7 
* Removed RDR^RDR message definition 

h) Chapter 6: 

* Added new fields to IN1, IN3, ACC Segments 
* Inserted PRT-Segment after PD1 Segment in DFT^P03 Message-Structure 
* Replaced ROL segment with PRT-Segment in all message structures 
* Changed data type for DRG-7 to CP 

i) Chapter 7: 

* Added Alert Trigger Event 
* Improved the description of SPM-27 
* Added OBX/TXA segments in all relevant messages 
* Fixed segment sequence in the Unsolicited Alert Observation Message 
* Clarified the potentially relevant participations that should use PRT segment 
* Clarified the purpose of Locally Defined Coded Element to Local Process Control 

j) Chapter 8: 

* Changed OM1-31 cardinality 
* Added specimen temperature to OM4 
* Added performing department to OM 
* Added order exclusive fields in OM1 
* Deprecated OM1-16 
* Addressed taxonomy for species in OM1 and OM4 
* Updated OM1-49 name to disambiguate from OBR-24 

k) Chapter 13: 

* Added NTE to SSU message 
* Added OBR to EAC message 
* Revised EQU-1 to be repeating 
* Introduced new field to TCC for test criticality 
* Revised description for SAC-16 
* Added DST segment to EAC message 

l) Chapter 17: 

* Fixed message structure typos, replacing incorrect '<>' brackets with the correct '{}' brackets 

Health Level Seven, Version 2.8 © 2014. All rights reserved.

Chapters

### CH_02 - Control

### CH_03 - Patient Administration

### CH_04 - Order Entry

### CH_05 - Query

### CH_06 - Financial Management

### CH_07 - Observation Reporting

### CH_08 - Master Files

### CH_09 - Medical Records/Information Management

### CH_10 - Scheduling

### CH_11 - Patient Referral

### CH_12 - Patient Care

### CH_13 - Clinical Laboratory Automation

### CH_14 - Application Management

### CH_15 - Personnel Management

### CH_16 - Claims and Reimbursement

### CH_17 - Materials Management


# HL7 Version 2.8 Contents

*   [1 . Introduction](https://www.hl7.eu/HL7v2x/v28/std28/ch01.html)
*   [2 . Control](https://www.hl7.eu/HL7v2x/v28/std28/ch02.html)
*   [3 . Patient Administration](https://www.hl7.eu/HL7v2x/v28/std28/ch03.html)
*   [4 . Order Entry](https://www.hl7.eu/HL7v2x/v28/std28/ch04.html)
*   [5 . Query](https://www.hl7.eu/HL7v2x/v28/std28/ch05.html)
*   [6 . Financial Management](https://www.hl7.eu/HL7v2x/v28/std28/ch06.html)
*   [7 . Observation Reporting](https://www.hl7.eu/HL7v2x/v28/std28/ch07.html)
*   [8 . Master Files](https://www.hl7.eu/HL7v2x/v28/std28/ch08.html)
*   [9 . Medical Records/Information Management](https://www.hl7.eu/HL7v2x/v28/std28/ch09.html)
*   [10 . Scheduling](https://www.hl7.eu/HL7v2x/v28/std28/ch10.html)
*   [11 . Patient Referral](https://www.hl7.eu/HL7v2x/v28/std28/ch11.html)
*   [12 . Patient Care](https://www.hl7.eu/HL7v2x/v28/std28/ch12.html)
*   [13 . Clinical Laboratory Automation](https://www.hl7.eu/HL7v2x/v28/std28/ch13.html)
*   [14 . Application Management](https://www.hl7.eu/HL7v2x/v28/std28/ch14.html)
*   [15 . Personnel Management](https://www.hl7.eu/HL7v2x/v28/std28/ch15.html)
*   [16 . Claims and Reimbursement](https://www.hl7.eu/HL7v2x/v28/std28/ch16.html)
*   [17 . Materials Management](https://www.hl7.eu/HL7v2x/v28/std28/ch17.html)
*   [Appendices](https://www.hl7.eu/HL7v2x/v28/std28/apa.html)





## 2.8 VERSION COMPATIBILITY DEFINITION

HL7 is committed to maintaining backward compatibility between versions of the standard. This section defines how changes are introduced and managed to ensure that implementations can evolve with the standard while minimizing disruption.

### 2.8.1 Adding messages or message constituents

New messages, segments, fields, or components can be added to the standard without affecting existing implementations. These additions are typically optional in the earlier versions and become required in later versions.

### 2.8.2 Changing messages or message constituents

Changes to existing messages, segments, fields, or components are carefully managed to avoid breaking backward compatibility. This may involve:

*   **Relaxing constraints:** Making a required field optional, increasing the length of a field, or expanding the value set of a table.
*   **Adding new components:** Adding new components to a data type or new sub-components to a field.
*   **Clarifying definitions:** Providing more precise definitions or usage notes for existing elements.

### 2.8.3 Deprecating messages or message constituents

Elements that are no longer recommended for use are marked as deprecated. Deprecated elements are still supported for backward compatibility but new implementations should avoid using them. They may be removed in future versions.

### 2.8.4 Removing messages or message constituents

Removal of messages, segments, fields, or components is a rare event and is only done after a long period of deprecation and with significant justification. This is considered a breaking change and is avoided whenever possible.

### 2.8.5 Early adoption of HL7 changes

Implementers can choose to adopt changes introduced in newer versions of the standard before they become normative. This allows for early testing and feedback, but may require adjustments if the changes are revised before final publication.

### 2.8.6 Technical correction rules

Minor errors or ambiguities in the standard are addressed through technical corrections. These corrections are typically non-breaking and are intended to improve the clarity and consistency of the standard.



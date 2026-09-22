# Synthetic Cross-BU Case Pack

ไฟล์นี้เป็นข้อมูลสมมติสำหรับ workshop เท่านั้น บริษัท เหตุการณ์ ตัวเลข และบทบาททั้งหมดไม่ใช่ข้อมูลจริงของ Mitr Phol หรือองค์กรอื่น

## Business situation

บริษัทสมมติ `BrightPath Services` รับคำขอบริการภายในจากหลาย Business Unit ผ่าน email, chat และ spreadsheet คนละชุด ทีม Operations ต้องคัดลอกข้อมูลเข้ารายการกลาง จัดประเภท ส่งต่อเจ้าของงาน และตอบสถานะกลับผู้ขอ

ผู้บริหารกำลังพิจารณาโครงการ `Unified Request Intake` เพื่อให้การรับคำขอ ติดตามสถานะ และรายงานผลทำได้สม่ำเสมอขึ้น BA ได้รับมอบหมายให้จัดระเบียบข้อมูลจากหลายฝ่าย ระบุสิ่งที่ยืนยันแล้ว สิ่งที่ยังไม่รู้ และเตรียมประเด็นสำหรับการตัดสินใจเรื่อง pilot

> **ขอบเขต:** อย่าเสนอ platform, vendor หรือการทำ automation จริง เป้าหมายของ case นี้คือการวิเคราะห์ requirement และการสื่อสารเท่านั้น

---

## Source A — Current-state observation

- **ผู้จัดทำ:** BA observation team
- **ช่วงข้อมูล:** 4 สัปดาห์ล่าสุด
- **สถานะ:** ตรวจนับจาก request log กลางแล้ว

- มีคำขอทั้งหมด 120 รายการ
- 28 รายการขาดข้อมูลอย่างน้อยหนึ่งช่องจาก `request category`, `business impact`, `needed-by date` หรือ `requester contact`
- ค่าเฉลี่ยเวลาจากรับคำขอถึงตอบกลับครั้งแรกคือ 2.4 business days
- 17 รายการถูกส่งต่อผิดทีมอย่างน้อยหนึ่งครั้ง
- 9 รายการถูกเปิดใหม่หลังผู้ขอคิดว่างานเสร็จแล้ว
- Log ไม่ได้บันทึกเวลาที่ผู้ขอส่งข้อมูลเพิ่มเติม จึงยังคำนวณเวลาที่รอข้อมูลจากผู้ขอไม่ได้

## Source B — Operations interview note

- **บทบาท:** Operations lead
- **สถานะ:** Interview note ที่ผู้ให้ข้อมูลยังไม่ได้ sign off

- อยากให้ทุกคำขอเข้าคิวเดียวก่อน แล้วจึง route ไปยังทีมที่รับผิดชอบ
- ต้องการข้อมูลขั้นต่ำ 4 ช่อง: `request category`, `business impact`, `needed-by date` และ `requester contact`
- เสนอเป้าหมายตอบกลับครั้งแรกภายใน 1 business day
- งานด่วนควรมีช่องทางเร่งรัด แต่ยังไม่ได้กำหนดว่าใครมีสิทธิ์ระบุว่าเป็นงานด่วน
- Operations ต้องการให้สถานะมีเพียง `New`, `In review`, `Waiting for requester`, `In progress`, `Done` และ `Closed`

## Source C — Business requester workshop note

- **บทบาท:** ตัวแทน Sales, Marketing และ HR
- **สถานะ:** Workshop note ฉบับร่าง

- ผู้ขออยากกรอกข้อมูลให้น้อยที่สุด โดยเสนอให้บังคับกรอกเพียงหัวข้อและรายละเอียดคำขอ
- ผู้ขอต้องการเห็น owner, สถานะปัจจุบัน และวันที่คาดว่าจะเสร็จ
- Sales ต้องการช่องทางเร่งรัดสำหรับคำขอที่กระทบลูกค้าภายในวันเดียวกัน
- Marketing อยากส่งไฟล์ประกอบหลายไฟล์ต่อคำขอ
- HR ระบุว่าคำขอบางประเภทอาจมีข้อมูลส่วนบุคคล แต่ยังไม่มีรายการประเภทข้อมูลหรือข้อกำหนดการเข้าถึง
- ตัวแทนทั้งสามฝ่ายอยากได้ summary รายสัปดาห์ แต่ยังไม่ตกลงว่าต้องมี metric ใด

## Source D — Finance and governance note

- **บทบาท:** Finance controller และ Risk coordinator
- **สถานะ:** ประเด็นสำหรับ BA นำไปถามต่อ

- คำขอที่มีค่าใช้จ่ายควรระบุ cost center และ estimated cost
- ยังไม่ยืนยันเกณฑ์ว่าคำขอระดับใดต้องมี approver
- คำขอที่มีผลกระทบสูงต้องมีผู้อนุมัติก่อนเริ่มงาน แต่คำว่า “ผลกระทบสูง” ยังไม่มีคำนิยาม
- ต้องเก็บประวัติการเปลี่ยน owner, status และ needed-by date
- ยังไม่ได้กำหนดระยะเวลาเก็บข้อมูลและผู้ที่มีสิทธิ์ดู audit history

## Source E — Technology feasibility note

- **บทบาท:** Internal technology team
- **สถานะ:** Feasibility note เบื้องต้น ไม่ใช่ commitment

- ระบบรายการกลางปัจจุบัน export เป็น CSV ได้วันละครั้ง
- ยังไม่ยืนยันว่าระบบรองรับ real-time API
- บัญชีผู้ใช้ยืนยันตัวตนผ่านบัญชีองค์กรได้
- Technology team ขอ data fields, role matrix และ expected volume ก่อนประเมินทางเลือก
- ยังไม่มี owner หรือ due date สำหรับ feasibility assessment รอบถัดไป

## Source F — Pilot planning messages

**Message 1 — Steering meeting note**

- เสนอเริ่ม pilot วันที่ 15 ตุลาคม
- เสนอให้ pilot กับ Sales และ Operations
- ยังไม่ระบุ success criteria

**Message 2 — Follow-up email summary**

- ระบุว่า pilot “น่าจะ” เริ่มวันที่ 1 พฤศจิกายน
- กล่าวถึง Marketing และ Operations เป็นกลุ่ม pilot
- ขอให้ BA ส่ง decision brief ก่อนเริ่ม pilot 3 สัปดาห์

> วันที่ กลุ่ม pilot และสถานะการอนุมัติของสองข้อความนี้ขัดแย้งกัน ห้ามเลือกข้อความใดเป็นข้อยุติโดยไม่มีการยืนยันจาก stakeholder

---

## Known gaps to investigate

รายการนี้ช่วยให้ผู้เรียนรู้ว่ามีช่องว่างอยู่ แต่ไม่ได้ให้คำตอบแทนการวิเคราะห์

- นิยามและผู้มีสิทธิ์กำหนด `urgent` หรือ `high impact`
- จุดเริ่มและจุดหยุดของการวัด first-response time
- เกณฑ์อนุมัติคำขอที่มีค่าใช้จ่าย
- ข้อมูลส่วนบุคคลที่อาจอยู่ในคำขอและสิทธิ์การเข้าถึง
- metric, audience และเจ้าของรายงานรายสัปดาห์
- วันที่ กลุ่มผู้ใช้ success criteria และผู้อนุมัติ pilot
- owner และ due date ของ feasibility assessment

## Rules for using this case

- อ้างถึง source ด้วยชื่อ `Source A` ถึง `Source F`
- แยกข้อมูลที่ source ระบุออกจาก interpretation ของผู้วิเคราะห์
- ห้ามสร้างตัวเลข วันที่ owner policy หรือสาเหตุที่ไม่มีใน source
- เมื่อ source ขัดแย้งกัน ให้บันทึก conflict และสร้าง clarification question
- ใช้ [Verification Checklist](./verification-checklist.md) ก่อนนำ output ไปใช้ใน Module ถัดไป

# Module 2: Using Copilot as a BA Assistant

**เวลา:** 09:30–10:30 (60 นาที)

เราจะใช้ `Copilot Chat` ช่วยจัดระเบียบ case ของ `BrightPath Services` ด้วย prompt framework `Goal + Context + Source + Expectation` แล้วทดลองสรุป ร่าง brief ระดมทางเลือก และปรับ tone ให้เหมาะกับผู้รับ

> **License:** ไม่จำเป็นต้องมี Microsoft 365 Copilot add-on แต่ต้องใช้ work/school account ที่องค์กรเปิด `Copilot Chat` ให้ใช้งาน `File upload` เป็น standard-access capability และอาจขึ้นกับ service availability

## Prerequisites

- ลงชื่อเข้าใช้ `Copilot Chat` ด้วยบัญชีที่ใช้ใน workshop
- เปิด [Synthetic Cross-BU Case Pack](../../files/synthetic-cross-bu-case-pack.md)
- เตรียมพื้นที่บันทึก prompt และ output

> **Fallback:** ถ้า `File upload` ใช้ไม่ได้ ให้ copy เนื้อหาทั้งหมดจาก Case Pack แล้ว paste ลงใน Chat พร้อมข้อความว่า “ใช้ข้อมูลสมมติต่อไปนี้เป็น source สำหรับบทสนทนานี้”

## Suggested pacing

- Practice 1 — 10 นาที
- Practice 2 — 15 นาที
- Practice 3 — 15 นาที
- Practice 4 — 10 นาที
- Practice 5 — 10 นาที

---

## Practice 1: สร้าง prompt ด้วยสี่ส่วน

**Primary target:** เขียน prompt ที่มี Goal, Context, Source และ Expectation ครบสำหรับการจัดระเบียบ case

1. เปิด Chat ใหม่
2. เลือก `Add content` หรือปุ่ม `+` แล้ว upload `synthetic-cross-bu-case-pack.md` หาก UI ของบัญชีมีความสามารถนี้
3. อ่าน prompt ด้านล่างและชี้ให้เพื่อนดูว่าแต่ละย่อหน้าทำหน้าที่เป็นส่วนใดของ framework
4. ส่ง prompt

   ```text
   Goal: ช่วยจัดระเบียบข้อมูลเบื้องต้นสำหรับ BA ที่กำลังศึกษาโครงการ Unified Request Intake

   Context: ฉันต้องเตรียมภาพรวมให้ทีม BA เข้าใจ current state ก่อนวิเคราะห์ requirement ห้ามตัดสินใจแทน stakeholder

   Source: ใช้เฉพาะ Synthetic Cross-BU Case Pack ที่แนบหรือ paste ใน Chat นี้

   Expectation: ตอบภาษาไทย แบ่งเป็น Business situation, Confirmed observations, Stakeholder inputs และ Items to clarify แต่ละข้อให้ระบุ Source A-F ที่สนับสนุน ถ้า source ไม่ได้ระบุให้เขียนว่า “ไม่พบใน source” และห้ามสร้างตัวเลข วันที่ owner หรือ policy เพิ่ม
   ```

5. ตรวจว่าคำตอบแบ่งส่วนตาม Expectation และอ้างชื่อ Source A-F เท่านั้น

### Checkpoint

- สามารถชี้ Goal, Context, Source และ Expectation ใน prompt ได้ครบ และคำตอบไม่ออกนอก case

---

## Practice 2: สรุปข้อมูลอย่างเป็นระบบ

**Primary target:** สร้าง structured summary ที่แยก current state ออกจาก stakeholder input

1. ใช้ Chat เดิมเพื่อรักษา context ของ Case Pack
2. ส่ง prompt ต่อไปนี้

   ```text
   สรุป case นี้ใหม่สำหรับ BA ที่เพิ่งเข้าร่วมโครงการ

   จัดเป็น:
   1. Current workflow ไม่เกิน 5 bullets
   2. Observed problems พร้อมตัวเลขและ source
   3. Stakeholder needs แยกตามบทบาท
   4. Known gaps ที่ยังตอบไม่ได้

   ใช้เฉพาะข้อมูลใน Case Pack แยกข้อมูลที่ตรวจนับแล้วออกจาก interview note หรือ draft และไม่เสนอ solution
   ```

3. เปรียบเทียบตัวเลข 120, 28, 2.4, 17 และ 9 กับ `Source A`
4. ทำเครื่องหมายหนึ่งข้อที่เป็น fact และหนึ่งข้อที่เป็น stakeholder input

### Checkpoint

- Summary มี current workflow, observed problems, stakeholder needs และ known gaps โดยตัวเลขตรงกับ Source A

---

## Practice 3: ร่าง BA brief ฉบับเริ่มต้น

**Primary target:** สร้าง brief ฉบับร่างที่บอกปัญหา ขอบเขต และสิ่งที่ต้องยืนยันโดยไม่สร้างข้อสรุป

1. ส่ง prompt ต่อไปนี้ใน Chat เดิม

   ```text
   จาก summary ที่สร้างและ Case Pack ร่าง BA discovery brief ภาษาไทยความยาวไม่เกิน 350 คำ

   ใช้หัวข้อ:
   - Purpose
   - Current-state evidence
   - Stakeholders and needs
   - Scope for discovery
   - Open questions before pilot decision

   ระบุ source หลัง evidence แต่ละข้อ ใช้น้ำเสียงเป็นกลาง และห้ามเขียนว่า pilot ได้รับอนุมัติแล้ว
   ```

2. ตรวจว่า brief ไม่เลือกวันที่หรือกลุ่ม pilot จาก Source F เอง
3. ตรวจว่า `Purpose` พูดถึงการศึกษาและเตรียมตัดสินใจ ไม่ใช่การ implement ระบบ

### Checkpoint

- Brief มีครบห้าหัวข้อและแสดงความขัดแย้งของ pilot เป็น open question

---

## Practice 4: ใช้ Copilot เป็นคู่คิด

**Primary target:** สร้างทางเลือกสำหรับการสำรวจ requirement โดยแสดง trade-off และข้อมูลที่ต้องตรวจเพิ่ม

1. ส่ง prompt ต่อไปนี้

   ```text
   เสนอ 3 วิธีที่ BA จะเก็บข้อมูลเพิ่มเติมเพื่อคลี่คลาย known gaps ใน Case Pack

   สำหรับแต่ละวิธีระบุ:
   - เหมาะกับ gap ใด
   - Stakeholder ที่ควรเข้าร่วม
   - จุดแข็ง
   - ข้อจำกัด
   - Evidence ที่ควรได้หลังทำกิจกรรม

   ห้ามเลือกวิธีที่ดีที่สุดแทน BA และห้ามเสนอ platform หรือ automation
   ```

2. เลือกหนึ่งทางเลือกที่เหมาะกับการนิยาม `urgent` และอธิบายเหตุผลกับเพื่อน
3. ตรวจว่าแต่ละทางเลือกให้ evidence ที่นำไปตรวจต่อได้

### Checkpoint

- ได้สามทางเลือกที่มี trade-off และ evidence ต่างกัน โดย BA ยังเป็นผู้เลือกแนวทาง

---

## Practice 5: ปรับ tone ตามผู้รับ

**Primary target:** ปรับข้อความเดียวกันให้เหมาะกับ stakeholder หนึ่งกลุ่มโดยคงข้อเท็จจริงเดิม

1. เลือกผู้รับหนึ่งกลุ่มจาก `Operations`, `Business requesters` หรือ `Steering group`
2. ส่ง prompt ต่อไปนี้ โดยแทนคำว่า `ผู้รับที่เลือก` ด้วยชื่อกลุ่มของเรา

   ```text
   ปรับ BA discovery brief ล่าสุดให้เป็นข้อความสำหรับผู้รับที่เลือก

   ความยาวไม่เกิน 180 คำ ใช้ภาษาไทยที่เป็นมืออาชีพและอ่านง่าย เน้นสิ่งที่ผู้รับกลุ่มนี้ต้องตรวจหรือให้ข้อมูล คง fact, number, source status และ unresolved items เดิม ห้ามเพิ่ม commitment หรือ due date
   ```

3. เปรียบเทียบฉบับใหม่กับ brief เดิม แล้ววงส่วนที่เปลี่ยนเพราะผู้รับต่างกัน
4. ตรวจว่า fact และสถานะของ pilot ไม่เปลี่ยนตาม tone

### Checkpoint

- ข้อความเหมาะกับผู้รับที่เลือก แต่ตัวเลข fact และ unresolved items ยังเหมือน brief ที่เป็น source

## Expected output

- Prompt ที่มี Goal + Context + Source + Expectation ครบหนึ่งชุด
- Structured summary หนึ่งชุด
- BA discovery brief หนึ่งฉบับ
- ทางเลือกสำหรับเก็บข้อมูลเพิ่มเติมสามวิธี
- ข้อความที่ปรับ tone สำหรับ stakeholder หนึ่งกลุ่ม

## Summary

เราได้ใช้ Copilot เป็น BA รุ่นน้องเพื่อจัดระเบียบ ร่าง และเสนอทางเลือก แต่ยังไม่ได้ถือว่าคำตอบถูกต้องทั้งหมด Module ถัดไปจะตรวจ output ด้วย `Draft → Inspect → Refine → Verify`

[กลับ Module 1](../module-01-frame-the-boring-task/) · [กลับหน้าหลัก](../../) · [ไป Module 3](../module-03-evidence-grounded-analysis/)

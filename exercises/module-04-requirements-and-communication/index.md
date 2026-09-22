# Module 4: Communicate, Test, and Improve a BA Workflow

**เวลา:** 13:00–14:30 (90 นาที)

เราจะเปลี่ยนข้อมูล stakeholder ที่กระจัดกระจายให้เป็น requirement view และ communication artifacts ที่ตรวจสอบย้อนกลับได้ ทุก output ต้องแสดง owner, due date, dependency และ unresolved item ตามหลักฐาน—ถ้ายังไม่ทราบให้เขียนตรง ๆ ว่ายังไม่ยืนยัน

> **License:** ใช้ `Copilot Chat` ได้โดยไม่จำเป็นต้องมี Microsoft 365 Copilot add-on ส่วน `Copilot Pages` ต้องใช้ work/school account ที่มี SharePoint หรือ OneDrive storage และขึ้นกับ tenant policy

## Prerequisites

- เปิด [Synthetic Cross-BU Case Pack](../../files/synthetic-cross-bu-case-pack.md)
- มี conflict record หรือ refined brief จาก Module 3
- เปิด [Verification Checklist](../../files/verification-checklist.md)
- เปิด [BA Work Experiment Card](../../files/ba-work-experiment-card.md) สำหรับ fallback

## Suggested pacing

- Practice 1 — 10 นาที
- Practice 2 — 10 นาที
- Practice 3 — 10 นาที
- Practice 4 — 15 นาที
- Practice 5 — 10 นาที
- Practice 6 — 10 นาที
- Practice 7 — 10 นาที
- Practice 8 — 15 นาที

---

## Practice 1: จัดกลุ่ม stakeholder requirements

**Primary target:** สร้าง requirement inventory ที่จัดกลุ่มตาม stakeholder และอ้าง source ได้

1. ใช้ Chat ที่มี Case Pack หรือเปิด Chat ใหม่แล้ว upload/paste Case Pack
2. ส่ง prompt ต่อไปนี้

   ```text
   สร้าง requirement inventory จาก Source B-E เท่านั้น

   แต่ละรายการระบุ Requirement ID, Stakeholder, Need or request, Source, Status และ Notes
   ใช้สถานะ Confirmed observation, Proposed, Draft, Needs clarification หรือ Constraint
   จัดกลุ่มตาม Operations, Business requesters, Finance/Governance และ Technology
   ห้ามเปลี่ยนคำขอของ stakeholder ให้เป็น approved requirement
   ```

3. เลือกหนึ่งรายการต่อ stakeholder แล้วเปิด source ตรวจข้อความและสถานะ
4. แก้รายการที่คำว่า `ต้องการ`, `เสนอ`, `ยังไม่ยืนยัน` หรือ `ขอข้อมูลเพิ่ม` ถูกตีความผิด

### Checkpoint

- Inventory มี requirement จาก stakeholder ครบสี่กลุ่ม และทุกรายการที่ตรวจมี Source B-E กับ status ที่ตรงกับต้นฉบับ

---

## Practice 2: หา overlap, conflict, dependency และ missing information

**Primary target:** สร้าง relationship map ที่แยกความสัมพันธ์ของ requirement เป็นสี่ประเภท

1. ใช้ requirement inventory จาก Practice 1
2. ส่ง prompt ต่อไปนี้

   ```text
   วิเคราะห์ความสัมพันธ์ใน requirement inventory โดยอ้าง Requirement ID และ source

   แยกเป็น:
   - Overlap
   - Conflict
   - Dependency
   - Missing information

   แต่ละรายการระบุ Related requirement IDs, Explanation, Evidence และ BA follow-up ห้ามแก้ conflict หรือเลือก requirement แทน stakeholder
   ```

3. ตรวจว่าความต้องการกรอกข้อมูลขั้นต่ำของ Operations กับความต้องการกรอกให้น้อยที่สุดของ Business requester ถูกแสดงเป็น conflict
4. ตรวจว่า Technology ขอ data fields, role matrix และ expected volume ถูกแสดงเป็น dependency ของ feasibility assessment

### Checkpoint

- Relationship map มีตัวอย่างครบสี่ประเภทและอ้าง Requirement ID ที่มีอยู่จริง

---

## Practice 3: เปลี่ยน assumption เป็น clarification question

**Primary target:** สร้างคำถามที่ช่วยยืนยันคำกำกวมและข้อมูลที่ขาดโดยระบุผู้ที่ควรถาม

1. ส่ง prompt ต่อไปนี้

   ```text
   จาก relationship map สร้าง clarification log ไม่เกิน 10 ข้อ

   แต่ละข้อระบุ Assumption or ambiguity, Clarification question, Stakeholder to ask, Why it matters และ Decision affected
   ให้ครอบคลุม urgent, high impact, first-response time, approval rule, personal data, weekly metrics และ pilot
   ถ้า source ไม่ระบุ stakeholder หรือ decision owner ให้เขียนว่า “ต้องระบุ owner”
   ```

2. อ่านคำถามทีละข้อและลบคำถามที่ชี้นำคำตอบ
3. ปรับคำถามหนึ่งข้อให้ขอ definition หรือ evidence ที่ตรวจได้

### Checkpoint

- Clarification log มีคำถามเป็นกลางที่เชื่อมกับ decision และไม่สร้าง owner เอง

---

## Practice 4: สร้าง decision brief

**Primary target:** สร้าง decision brief ที่แยก evidence, options, unresolved items และ decision needed

1. ส่ง prompt ต่อไปนี้

   ```text
   ใช้เฉพาะ Case Pack, requirement inventory, relationship map และ clarification log ที่สร้างใน Chat นี้

   สร้าง Decision Brief ภาษาไทยสำหรับ Steering group ความยาวไม่เกิน 500 คำ:
   1. Decision purpose
   2. Verified current-state evidence
   3. Stakeholder needs and constraints
   4. Conflicts and dependencies
   5. Options for the next discovery step
   6. Unresolved items
   7. Decisions needed from Steering group

   อ้าง Source A-F หลัง evidence ห้ามเลือก pilot date หรือ participant group ห้ามเสนอ platform และห้ามเขียนว่า pilot ได้รับอนุมัติ
   ```

2. ตรวจตัวเลขกับ Source A และสถานะ pilot กับ Source F
3. ใช้ Verification Checklist ตรวจ `Fact, assumption, gap` และ `Requirement quality`
4. ขอให้ Copilot แก้เฉพาะจุดที่ checklist ไม่ผ่าน

### Checkpoint

- Decision brief บอกได้ชัดว่า Steering group ต้องตัดสินใจอะไร โดย evidence และ unresolved items ไม่ปะปนกัน

---

## Practice 5: สร้าง meeting summary

**Primary target:** สร้าง meeting summary ที่แยกสิ่งที่พูดถึง สิ่งที่ตัดสินใจ และสิ่งที่ยังไม่ยืนยัน

1. สมมติว่า Case Pack คือข้อมูลก่อนประชุมและ Decision Brief คือเอกสารที่นำเสนอ
2. ส่ง prompt ต่อไปนี้

   ```text
   สร้าง meeting summary ฉบับร่างจากข้อมูลที่มี โดยห้ามแต่งสิ่งที่เกิดขึ้นในที่ประชุม

   ใช้หัวข้อ:
   - Purpose and materials reviewed
   - Key evidence discussed
   - Decisions: เขียน “ยังไม่มีข้อมูลการตัดสินใจจากที่ประชุม”
   - Questions requiring confirmation
   - Inputs needed for the next meeting

   แยก pre-meeting information ออกจาก meeting outcome อย่างชัดเจน
   ```

3. ตรวจว่า summary ไม่บอกว่ามี decision, owner หรือ due date ที่ Case Pack ไม่มี
4. ระบุส่วนที่ผู้จดประชุมต้องเติมหลังประชุมจริง

### Checkpoint

- Summary แยก material ที่นำเสนอออกจาก decision ที่ยังไม่เกิดขึ้น และไม่สร้าง meeting outcome

---

## Practice 6: สร้าง action register

**Primary target:** สร้าง action register ที่แสดง owner, due date, dependency และ unresolved status อย่างซื่อสัตย์

1. ส่ง prompt ต่อไปนี้

   ```text
   สร้าง action register จาก Case Pack และ clarification log

   ใช้คอลัมน์ Action ID | Action | Proposed owner | Due date | Dependency | Status | Source
   ถ้า owner หรือ due date ไม่ได้ยืนยัน ให้เขียน “ยังไม่ยืนยัน”
   อย่าตั้งวันที่จาก pilot date และอย่าเปลี่ยน stakeholder ที่ควรถามให้เป็นผู้รับผิดชอบโดยอัตโนมัติ
   ```

2. ตรวจทุกแถวที่มี owner หรือ due date กับ source
3. เปลี่ยนข้อมูลที่ Copilot สร้างเองเป็น `ยังไม่ยืนยัน`
4. ทำเครื่องหมายหัวข้อ `Communication and action` ใน Verification Checklist เฉพาะข้อที่ผ่าน

### Checkpoint

- Action register ไม่มี owner หรือ due date ที่สร้างขึ้นเอง และแต่ละ action แสดง dependency หรือ unresolved status ที่เกี่ยวข้อง

---

## Practice 7: ร่าง stakeholder follow-up

**Primary target:** สร้างข้อความ follow-up ที่ขอข้อมูลจำเป็นจาก stakeholder หนึ่งกลุ่มด้วย tone ที่เหมาะสม

1. เลือกหนึ่งกลุ่มจาก Operations, Business requesters, Finance/Governance, Technology หรือ Steering group
2. ส่ง prompt ต่อไปนี้ โดยระบุชื่อกลุ่มที่เลือกในบรรทัดแรก

   ```text
   ผู้รับ: ระบุ stakeholder group ที่เลือก

   ร่างข้อความ follow-up ภาษาไทยไม่เกิน 180 คำ เพื่อขอคำยืนยันจากผู้รับกลุ่มนี้
   ประกอบด้วย Context สั้น ๆ, Confirmed information, Questions ไม่เกิน 4 ข้อ, Requested next step และสิ่งที่ยังไม่มี due date

   ใช้น้ำเสียงเป็นกลาง ห้ามกล่าวว่าผู้รับเป็น owner ถ้า source ไม่ได้ยืนยัน และห้ามเปิดเผยข้อมูลเกิน Case Pack
   ```

3. ตรวจว่าคำถามเกี่ยวข้องกับ stakeholder ที่เลือกจริง
4. ปรับข้อความให้อ่านง่ายใน Microsoft Teams โดยไม่เปลี่ยน fact

### Checkpoint

- Follow-up ขอข้อมูลที่ stakeholder กลุ่มนั้นตอบได้ และไม่สร้าง commitment, owner หรือ due date

---

## Practice 8: แชร์ verified content ผ่าน Copilot Pages

**Primary target:** เปลี่ยน output ที่ verified แล้วเป็น collaboration Page หรือ fallback record ที่พร้อมให้ทีม review

1. เลือก Decision Brief หรือ Meeting Summary ที่ผ่าน Verification Checklist แล้ว
2. ในคำตอบของ Copilot เลือก `Edit in Pages` หาก UI แสดงคำสั่งนี้
3. ตั้งชื่อ Page ว่า `Unified Request Intake - BA Review Draft`
4. เพิ่มหัวข้อ `Review needed` และระบุรายการที่ต้องให้ทีมตรวจจาก clarification log
5. ตรวจว่า Page ไม่มี prompt history, ข้อมูลอื่นจาก Chat หรือ claim ที่ยัง unsupported
6. ถ้า policy อนุญาต ให้แชร์ Page เฉพาะผู้ร่วม workshop ที่กำหนด แล้วขอให้หนึ่งคนเพิ่ม comment หรือแก้คำหนึ่งจุด
7. ถ้า `Copilot Pages` ใช้ไม่ได้ ให้ copy verified content ลงหัวข้อ `Verified collaboration content` ใน BA Work Experiment Card และแลกไฟล์กับเพื่อนตามช่องทาง workshop

### Checkpoint

- มี Page หรือ fallback record หนึ่งชุดที่ประกอบด้วย verified content และรายการที่ต้อง review โดยไม่มีข้อมูลจาก Chat ที่ไม่เกี่ยวข้อง

> **⚠️ Note:** การสร้าง Page ไม่ได้ทำให้เนื้อหาถูกต้องขึ้น ต้องผ่าน Verification Checklist ก่อนแชร์เสมอ

## Expected output

- Requirement inventory และ relationship map
- Clarification log
- Decision brief
- Meeting summary
- Action register
- Stakeholder follow-up
- Copilot Page หรือ fallback collaboration record

## Summary

เราได้เปลี่ยน stakeholder inputs เป็น requirement และ communication artifacts หลายแบบ โดยรักษา traceability และไม่ซ่อนสิ่งที่ยังไม่ยืนยัน Module 5 จะนำ framework เดียวกันกลับไปทดลองกับ boring task ของเราเอง

[กลับ Module 3](../module-03-evidence-grounded-analysis/) · [กลับหน้าหลัก](../../) · [ไป Module 5](../module-05-ba-work-experiment/)

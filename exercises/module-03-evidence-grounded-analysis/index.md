# Module 3: Evidence-Grounded BA Analysis

**เวลา:** 10:45–12:00 (75 นาที)

คำตอบแรกจาก Copilot คือ draft ไม่ใช่ข้อยุติ เราจะตรวจคำตอบเหมือน BA ตรวจงานของผู้ช่วยรุ่นน้อง: มองจากหลายบทบาท แยก fact ออกจาก assumption เปิด source ตรวจตัวเลข และถามต่อเมื่อข้อมูลไม่พอหรือขัดแย้งกัน

> **License:** ใช้ `Copilot Chat` ด้วย work/school account ได้โดยไม่จำเป็นต้องมี Microsoft 365 Copilot add-on ความพร้อมของ `File upload`, `Prompt Gallery` และการแชร์ prompt ต้องตรวจสอบกับบัญชีและ tenant ก่อนเริ่มอบรม

## Prerequisites

- ทำ Module 2 หรือมี Chat ที่แนบ [Synthetic Cross-BU Case Pack](../../files/synthetic-cross-bu-case-pack.md) แล้ว
- เปิด [Verification Checklist](../../files/verification-checklist.md)
- เปิด [BA Work Experiment Card](../../files/ba-work-experiment-card.md) สำหรับ fallback การบันทึก prompt

## Suggested pacing

- Practice 1 — 10 นาที
- Practice 2 — 15 นาที
- Practice 3 — 15 นาที
- Practice 4 — 15 นาที
- Practice 5 — 20 นาที

---

## Practice 1: มองข้อมูลจากบทบาทที่ต่างกัน

**Primary target:** เปรียบเทียบประเด็นที่ stakeholder สองบทบาทให้ความสำคัญโดยยังไม่ตัดสินว่าฝ่ายใดถูก

1. ใช้ Chat ที่มี Case Pack หรือเปิด Chat ใหม่แล้ว upload/paste Case Pack
2. ส่ง prompt ต่อไปนี้

   ```text
   ทำ role play จากข้อมูลใน Case Pack เท่านั้น

   รอบที่ 1: มองในบทบาท Operations lead
   รอบที่ 2: มองในบทบาท Business requester

   สำหรับแต่ละบทบาทสรุป Goals, Concerns, Evidence from source และ Questions to ask อย่างละไม่เกิน 3 bullets จากนั้นสรุปจุดที่ทั้งสองฝ่ายเห็นตรงกันและจุดที่ต้องคุยต่อ

   ห้ามสร้างความเห็นแทน stakeholder เมื่อ source ไม่ได้ระบุ และติดป้ายว่า “ต้องยืนยัน” ให้ inference ทุกข้อ
   ```

3. อ่านคำตอบโดยสลับบทบาทกับเพื่อนคนละหนึ่งฝ่าย
4. ระบุหนึ่งจุดที่เป็นข้อมูลจาก source และหนึ่งจุดที่เป็น inference

### Checkpoint

- เปรียบเทียบ Goals และ Concerns ของสองบทบาทได้ โดย inference ถูกติดป้ายและยังไม่มีการเลือกฝ่ายชนะ

---

## Practice 2: แยก fact, assumption, gap และ open question

**Primary target:** จัดประเภท statement จาก case เป็น fact, assumption, gap หรือ open question พร้อม source reference

1. ส่ง prompt ต่อไปนี้

   ```text
   ตรวจ Case Pack และสร้างรายการวิเคราะห์ 4 กลุ่ม:
   1. Fact
   2. Assumption or proposal
   3. Gap
   4. Open question

   แต่ละรายการให้มี Statement | Classification | Source | Reason
   ใช้ Source A-F เท่านั้น อย่างน้อยกลุ่มละ 3 รายการ
   ถ้าข้อความหนึ่งยังเป็น proposal หรือ draft ห้ามจัดเป็น confirmed fact
   ```

2. เลือกอย่างน้อยหกรายการแล้วเปิด Case Pack เทียบทีละข้อ
3. แก้ classification ที่ไม่ตรงกับสถานะของ source ด้วย prompt ระบุเฉพาะรายการนั้น

   ```text
   ตรวจ statement นี้ใหม่กับ source ที่ระบุ: ข้อความที่ต้องการตรวจ

   แสดงข้อความจาก source แบบสั้น ระบุ classification ที่ถูกต้อง และอธิบายเหตุผลไม่เกิน 2 bullets ถ้าหาหลักฐานไม่พบให้ตอบว่า “ไม่พบใน source”
   ```

4. บันทึก open question สองข้อที่มีผลต่อ pilot decision

### Checkpoint

- มีตัวอย่างครบทั้งสี่ประเภท และรายการที่เลือกตรวจย้อนกลับไปหา Source A-F ได้

---

## Practice 3: ตรวจ citation, ตัวเลข และข้ออ้าง

**Primary target:** ตรวจสอบ evidence สำคัญใน draft และระบุข้ออ้างที่ยังไม่พร้อมใช้

1. นำ BA discovery brief จาก Module 2 มาใช้ หรือขอให้ Copilot สร้าง brief ตาม prompt ใน Module 2 ใหม่
2. ส่ง prompt นี้ให้ Copilot ตรวจ draft ของตนเอง

   ```text
   Audit BA discovery brief ล่าสุดกับ Case Pack

   เลือก claims สำคัญไม่เกิน 10 ข้อ แล้วแสดง:
   Claim | Source | Exact value or status | Verified / Needs correction / Unsupported

   ตรวจตัวเลข 120, 28, 2.4, 17 และ 9 โดยเฉพาะ และตรวจว่าข้อความเกี่ยวกับ pilot ใช้คำว่า proposal หรือ tentative ตาม source ห้ามแก้ draft จนกว่าจะแสดง audit เสร็จ
   ```

3. เปิด `Source A` แล้วตรวจตัวเลขทั้งห้าด้วยตนเอง
4. เปิด `Source F` แล้วตรวจวันที่ กลุ่ม pilot และสถานะว่าได้รับอนุมัติแล้วหรือยัง
5. ทำเครื่องหมายหัวข้อ `Citation และ number` ใน Verification Checklist เฉพาะข้อที่ตรวจจริง

### Checkpoint

- ระบุ claim ที่ verified อย่างน้อยสองข้อและ claim ที่ต้องแก้หรือยัง unsupported อย่างน้อยหนึ่งข้อ พร้อม source

> **⚠️ Note:** การให้ Copilot ตรวจคำตอบของตนเองช่วยค้นจุดเสี่ยง แต่ไม่แทนการเปิด source ตรวจด้วยคน

---

## Practice 4: ปรับ prompt เมื่อ source ขัดแย้งกัน

**Primary target:** สร้าง conflict record และ clarification questions โดยไม่เลือกข้อสรุปแทน stakeholder

1. ส่ง prompt ต่อไปนี้

   ```text
   ตรวจ Source F โดยไม่ใช้ข้อมูลภายนอก

   สร้าง conflict record สำหรับ:
   - pilot date
   - pilot participant groups
   - approval status

   แต่ละรายการระบุ Source statement 1, Source statement 2, Why they conflict, Decision owner to confirm และ Clarification question ถ้า source ไม่ระบุ decision owner ให้เขียนว่า “owner not identified”
   ```

2. ตรวจว่า Copilot ไม่เลือก 15 ตุลาคมหรือ 1 พฤศจิกายนเป็นวันที่จริง
3. ขอให้ปรับ discovery brief โดยใช้ conflict record

   ```text
   ปรับ BA discovery brief ให้แยก Confirmed evidence, Proposals, Conflicts และ Questions before decision

   คงตัวเลขที่ verified แล้ว ห้ามเลือกวันหรือกลุ่ม pilot และห้ามสร้าง owner หรือ due date ที่ source ไม่ได้ระบุ
   ```

4. เปรียบเทียบ draft ก่อนและหลัง refine แล้วบอกเพื่อนว่าความเสี่ยงใดลดลง

### Checkpoint

- Brief ฉบับ refined แสดง conflict และคำถามชัดเจน โดยไม่เปลี่ยน proposal ให้เป็น decision

---

## Practice 5: Verify และเก็บ prompt ที่ใช้ซ้ำได้

**Primary target:** ยืนยันสถานะของ output และบันทึก prompt ที่ผ่านการตรวจไว้ใช้ซ้ำ

1. ใช้ Verification Checklist ตรวจ brief ฉบับ refined ตั้งแต่ `Source` ถึง `Final decision`
2. ระบุสถานะหนึ่งค่า: `พร้อมใช้`, `ใช้ได้เมื่อแก้ไข` หรือ `ยังไม่ควรใช้` พร้อมเหตุผล
3. เลือก prompt ที่ช่วยสร้าง conflict record หรือ audit claims ได้ดีที่สุด
4. ถ้า UI มี `Save prompt` ให้เลือกคำสั่งนั้น แล้วเปิด `Prompt Gallery` > `Your prompts` เพื่อตรวจว่า prompt ถูกบันทึก
5. ตั้งชื่อ prompt ว่า `Audit BA evidence and conflicts`
6. ถ้ามี Microsoft Teams team สำหรับ workshop และ tenant อนุญาต ให้เลือก `Share prompt` > `Share to team` แล้วตรวจใน `Team prompts`
7. ถ้าไม่มีความสามารถบันทึกหรือแชร์ ให้ copy prompt ลงหัวข้อ `Reusable prompt or collaboration draft` ใน BA Work Experiment Card
8. ห้ามแชร์ case หรือ prompt ไปยัง team ที่ไม่ใช่พื้นที่ workshop

### Checkpoint

- Output มี final decision พร้อมเหตุผล และ prompt อยู่ใน `Your prompts`, `Team prompts` หรือ BA Work Experiment Card อย่างน้อยหนึ่งแห่ง

## Expected output

- Role comparison สองบทบาท
- รายการ fact, assumption, gap และ open question
- Claim audit ที่ตรวจ citation และตัวเลขแล้ว
- Conflict record และ refined brief
- Prompt ที่บันทึกไว้ใช้ซ้ำ พร้อมสถานะ verification ของ output

## Summary

เราได้ใช้วงจร `Draft → Inspect → Refine → Verify` เพื่อทำให้ draft กลายเป็นงานวิเคราะห์ที่เห็นหลักฐาน ข้อสมมติฐาน ความขัดแย้ง และสิ่งที่ต้องถามต่ออย่างโปร่งใส Module 4 จะใช้ข้อมูลที่ verified แล้วสร้าง requirement และ communication artifacts

[กลับ Module 2](../module-02-copilot-as-ba-assistant/) · [กลับหน้าหลัก](../../) · [ไป Module 4](../module-04-requirements-and-communication/)

# Module 5: Solving the BA Boring Task with Copilot Chat

**เวลา:** 14:45–16:00 (75 นาที)

เราจะกลับมาที่ boring task จาก Module 1 แล้วนำ `Goal + Context + Source + Expectation` และ `Draft → Inspect → Refine → Verify` มาประกอบเป็น workflow ทดลองที่นำกลับไปใช้ต่อได้ โดยไม่ส่งงานจริงหรือเปลี่ยนระบบใน workshop

> **License:** ไม่จำเป็นต้องมี Microsoft 365 Copilot add-on แต่ต้องใช้ work/school account ที่องค์กรเปิด `Copilot Chat` ให้ใช้งาน หาก Chat ไม่พร้อม ให้เขียน prompt และทำ peer review แบบ offline ได้

## Prerequisites

- [BA Work Experiment Card](../../files/ba-work-experiment-card.md) ที่เริ่มไว้ใน Module 1
- [Verification Checklist](../../files/verification-checklist.md)
- boring task ที่อธิบายด้วยข้อมูลสมมติ ข้อมูลทั่วไป หรือข้อมูลที่ได้รับอนุญาต

## Suggested pacing

- Practice 1 — 15 นาที
- Practice 2 — 20 นาที
- Practice 3 — 20 นาที
- Practice 4 — 10 นาที
- Practice 5 — 10 นาที

---

## Practice 1: เลือกจุดทดลองใน workflow

**Primary target:** เลือกขั้นตอนเดียวใน boring task ที่เหมาะสำหรับทดลองใช้ Copilot และกำหนดขอบเขตให้ชัด

1. เปิดหัวข้อ `Current workflow` และ `AI-fit and human responsibility` ใน Card
2. เลือกหนึ่งขั้นตอนที่ Copilot ช่วยร่าง สรุป จัดกลุ่ม เปรียบเทียบ หรือสร้างคำถามได้
3. ตรวจว่าขั้นตอนนั้นมี input และ output ชัดเจนและไม่ต้องให้ Copilot อนุมัติหรือตัดสินใจแทน BA
4. สร้างข้อมูลตัวอย่างสมมติขนาดเล็กสำหรับทดลอง ห้ามใช้ข้อมูลลับหรือข้อมูลส่วนบุคคล
5. เขียนจุดเริ่ม จุดสิ้นสุด และจุดที่ BA ต้องตรวจใน Card

### Checkpoint

- อธิบายได้ในหนึ่งประโยคว่า “Copilot จะช่วยทำอะไรจาก input ใด และ BA จะตรวจอะไรต่อ”

---

## Practice 2: ออกแบบ prompt สำหรับ boring task

**Primary target:** สร้าง prompt ที่มีสี่ส่วนครบและให้ output ตรงกับ definition of done

1. เติมหัวข้อ `Prompt draft` ใน Card ด้วยข้อมูลของ boring task
2. ใช้ template ต่อไปนี้เป็นโครง แล้วแทนข้อความอธิบายในแต่ละบรรทัดด้วยข้อมูลสมมติของเรา

   ```text
   Goal: ระบุงานเดียวที่ต้องการให้ Copilot ช่วยและผลลัพธ์ที่ต้องการ

   Context: อธิบายบทบาท ผู้รับผลลัพธ์ สถานการณ์ และข้อจำกัดที่จำเป็น

   Source: ระบุข้อมูลที่ให้ใช้และสิ่งที่ห้ามคาดเดา ถ้าไม่มีข้อมูลเพียงพอให้ถามกลับ

   Expectation: ระบุภาษา โครงสร้าง ความยาว tone และเกณฑ์ตรวจ output
   ```

3. ตรวจ prompt ด้วยคำถามสี่ข้อ:
   - Copilot รู้หรือไม่ว่าต้องทำอะไร
   - รู้หรือไม่ว่ากำลังช่วยใครและในสถานการณ์ใด
   - รู้หรือไม่ว่าใช้ข้อมูลอะไรได้
   - รู้หรือไม่ว่า output ที่ถือว่า done หน้าตาอย่างไร
4. เพิ่มข้อจำกัดอย่างน้อยหนึ่งข้อเพื่อป้องกันความผิดพลาดที่ยอมรับไม่ได้จาก Module 1
5. ถ้าใช้ Chat ได้ ให้ส่ง prompt พร้อมข้อมูลสมมติ ถ้าใช้ไม่ได้ ให้แลก prompt กับเพื่อนและให้เพื่อนอธิบาย output ที่คาดว่าจะได้

### Checkpoint

- Prompt มี Goal, Context, Source และ Expectation ครบ และเชื่อมกับ definition of done ใน Card

---

## Practice 3: ทดลอง Draft → Inspect → Refine → Verify

**Primary target:** ปรับ prompt จากหลักฐานการทดลองหนึ่งรอบจนระบุสถานะความพร้อมของ output ได้

1. บันทึกคำตอบแรกในหัวข้อ `Draft` ของ Card
2. ใช้ Verification Checklist ตรวจ source, fact, assumption, gap, number และ unsupported claim ที่เกี่ยวข้อง
3. บันทึกจุดที่ดี จุดที่ไม่ชัด และความเสี่ยงในหัวข้อ `Inspect`
4. เลือกปัญหาสำคัญที่สุดหนึ่งจุด แล้วส่ง prompt ต่อเนื่องที่ระบุสิ่งที่ต้องแก้อย่างเจาะจง

   ```text
   ตรวจและปรับเฉพาะจุดที่ระบุต่อไปนี้ใน draft ล่าสุด

   ปัญหาที่พบ: อธิบายปัญหาหนึ่งจุดจากการ Inspect
   หลักฐานหรือข้อจำกัดที่ต้องยึด: ระบุ source หรือ rule ที่ใช้ตรวจ
   ผลลัพธ์ที่ต้องการ: อธิบายการแก้ไขที่สังเกตได้

   แสดงสิ่งที่เปลี่ยนและเหตุผลแบบสั้น ห้ามแก้ส่วนอื่นที่ผ่านการตรวจแล้ว
   ```

5. เปรียบเทียบ draft ก่อนและหลัง refine
6. ตรวจ source หรือตัวเลขสำคัญด้วยตนเองอย่างน้อยสองจุด
7. ระบุ final decision ใน Card เป็น `พร้อมใช้`, `ใช้ได้เมื่อแก้ไข` หรือ `ยังไม่ควรใช้`

### Checkpoint

- Card แสดงปัญหาที่พบ การปรับหนึ่งรอบ หลักฐานที่ตรวจ และ final decision พร้อมเหตุผล

---

## Practice 4: แชร์ workflow และรับ peer feedback

**Primary target:** อธิบาย workflow ทดลองให้เพื่อนเข้าใจและเก็บ feedback ที่นำไปปรับได้หนึ่งชุด

1. จับคู่กับเพื่อน
2. อธิบายภายในสองนาที:
   - boring task และ pain point
   - ขั้นตอนที่ Copilot ช่วย
   - prompt framework
   - จุดที่ BA ตรวจและรับผิดชอบ
   - สิ่งที่ดีขึ้นหลัง refine
3. แสดงเฉพาะข้อมูลสมมติและ prompt ที่ปลอดภัยสำหรับแชร์
4. ให้เพื่อนใช้หัวข้อ `Peer feedback` ใน Card ถามเรื่อง Goal, Source, assumption และจุดเสี่ยง
5. สลับบทบาท แล้วบันทึก feedback ที่จะนำไปปรับหนึ่งข้อ

### Checkpoint

- เพื่อนสรุป workflow ของเราได้ถูกต้องและให้ feedback ที่เชื่อมกับ Goal, Source หรือ verification อย่างน้อยหนึ่งข้อ

---

## Practice 5: วางแผน workplace experiment

**Primary target:** กำหนดการทดลองใช้ prompt หลังอบรมที่มีข้อมูลปลอดภัย วิธีวัดผล และ human review gate

1. เติมหัวข้อ `Workplace experiment` ใน Card
2. เลือกงานขนาดเล็กหนึ่งครั้งสำหรับทดลอง ไม่เริ่มจากงานที่มีความเสี่ยงสูงหรือมีข้อมูลอ่อนไหว
3. กำหนดตัวชี้วัดที่สังเกตได้หนึ่งถึงสองข้อ เช่น เวลาเตรียม draft จำนวนจุดที่ต้องแก้ หรือความครบของ output
4. ระบุจุดที่ต้องหยุดให้คนตรวจ ก่อนส่งข้อความ ตัดสินใจ เปลี่ยน requirement หรือเผยแพร่ผลลัพธ์
5. ระบุผู้ที่จะขอ feedback โดยใช้บทบาทแทนชื่อบุคคล
6. เก็บ reusable prompt ไว้ใน `Prompt Gallery` หรือหัวข้อ `Reusable prompt or collaboration draft` ใน Card

### Checkpoint

- Workplace experiment มีงานทดลอง เวลา ข้อมูลที่ใช้ วิธีวัดผล human review gate และผู้ให้ feedback ครบ

## Expected output

- BA workflow experiment หนึ่งชุด
- Prompt ที่มี Goal + Context + Source + Expectation
- บันทึก Draft → Inspect → Refine → Verify หนึ่งรอบ
- Peer feedback หนึ่งชุด
- แผนทดลองหลังอบรมที่มี verification และ human review gate

## Summary

เราได้เปลี่ยน boring task ให้เป็นการทดลองที่มีขอบเขต prompt หลักฐาน จุดตรวจ และผู้รับผิดชอบชัดเจน เป้าหมายไม่ใช่ให้ Copilot ทำงานแทน BA ทั้งหมด แต่ให้ BA ใช้ผู้ช่วยได้เร็วขึ้นโดยยังควบคุมคุณภาพและการตัดสินใจ

[กลับ Module 4](../module-04-requirements-and-communication/) · [กลับหน้าหลัก](../../)

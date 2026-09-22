# Module 1: Framing the BA Boring Task

**เวลา:** 09:00–09:30 (30 นาที)

เราจะเลือกงาน BA ที่ทำซ้ำ ใช้เวลามาก หรือสร้าง pain point แล้วทำให้โจทย์ชัดพอสำหรับทดลองใช้ Copilot ตลอดวัน เปรียบเหมือนบอกผู้ช่วยคนใหม่ให้รู้ก่อนว่า “งานคืออะไร” และ “อะไรห้ามตัดสินใจแทนเรา”

> **License:** Module นี้ทำได้โดยไม่ต้องใช้ Microsoft 365 Copilot add-on และยังทำแบบ offline ได้ทั้งหมด

## Prerequisites

- Post-it หรือกระดาษหนึ่งแผ่น
- สำเนา [BA Work Experiment Card](../../files/ba-work-experiment-card.md)
- งานตัวอย่างที่อธิบายได้โดยไม่เปิดเผยข้อมูลลับหรือข้อมูลส่วนบุคคล

## Suggested pacing

- Practice 1 — 10 นาที
- Practice 2 — 10 นาที
- Practice 3 — 10 นาที

---

## Practice 1: ระบุ BA boring task

**Primary target:** อธิบายงาน BA ที่ทำซ้ำหนึ่งงานให้เห็น trigger, input, output และ pain point ชัดเจน

1. นึกถึงงาน BA ที่ต้องทำบ่อย ใช้เวลามาก หรือทำให้ต้องคัดลอกและตรวจข้อมูลซ้ำ
2. เลือกเพียงหนึ่งงานที่มี output ชัดเจน เช่น meeting summary, requirement list, comparison brief หรือ action register
3. เขียนชื่องานและเหตุผลที่น่าเบื่อลงบน Post-it
4. เติมหัวข้อ `My boring task` และ `Current workflow` ใน `BA Work Experiment Card`
5. ขีดเส้นใต้จุดที่ต้องรอ ทำซ้ำ หรือย้อนกลับไปแก้มากที่สุดหนึ่งจุด

### Checkpoint

- เพื่อนอ่าน Card แล้วบอกได้ว่างานเริ่มเมื่อใด ใช้ input อะไร และต้องส่ง output อะไร

---

## Practice 2: แยกงานที่ Copilot ช่วยได้

**Primary target:** จำแนกขั้นตอนใน workflow ว่า Copilot ช่วยร่างได้หรือ BA ต้องตัดสินใจและตรวจสอบเอง

1. อ่านขั้นตอนใน `Current workflow` ทีละข้อ
2. ทำเครื่องหมาย `C` หน้าขั้นตอนที่ Copilot อาจช่วยสรุป จัดกลุ่ม ร่าง เปรียบเทียบ หรือเสนอคำถามได้
3. ทำเครื่องหมาย `BA` หน้าขั้นตอนที่ต้องใช้ความรับผิดชอบของคน เช่น ยืนยัน requirement, อนุมัติ scope, ตีความ policy, เลือก source หรือรับรองตัวเลข
4. ถ้าขั้นตอนหนึ่งมีทั้ง `C` และ `BA` ให้เขียนจุดส่งต่องานให้ชัด เช่น “Copilot ร่างรายการคำถาม → BA ตรวจ source และเลือกคำถามที่จะส่ง”
5. เติมหัวข้อ `AI-fit and human responsibility` ใน Card

### Checkpoint

- มีอย่างน้อยหนึ่งขั้นตอนที่ Copilot ช่วยได้และหนึ่งขั้นตอนที่ BA ต้องรับผิดชอบเอง พร้อมจุดส่งต่องานที่ชัดเจน

> **⚠️ Note:** Copilot ช่วยลดงานเตรียมและงานร่าง แต่ไม่ถือว่าเป็นผู้อนุมัติ เจ้าของ requirement หรือ source of truth

---

## Practice 3: กำหนดโจทย์ทดลองตลอดวัน

**Primary target:** กำหนด definition of done สำหรับการทดลองใช้ Copilot กับ boring task หนึ่งงาน

1. ระบุ output หนึ่งชิ้นที่อยากทำให้ดีขึ้นหรือเร็วขึ้นภายในขอบเขต workshop
2. เขียนรูปแบบ output ผู้รับ และหลักฐานที่ต้องตรวจ
3. ระบุข้อผิดพลาดหนึ่งอย่างที่ยอมรับไม่ได้ เช่น owner ผิด ตัวเลขผิด หรือเติม requirement เอง
4. เขียนสิ่งที่อยู่นอกขอบเขต เช่น การส่งข้อความจริง การเปลี่ยนระบบ หรือการอนุมัติแทน stakeholder
5. เติมหัวข้อ `Definition of done` ใน Card ให้ครบ

### Checkpoint

- Definition of done ระบุ output, ผู้รับ, หลักฐานที่ต้องตรวจ และจุดที่คนต้อง review ครบ

## Expected output

- Post-it ที่มี BA boring task หนึ่งงาน
- `BA Work Experiment Card` ที่มี current workflow, AI-fit, human responsibility และ definition of done

## Summary

เราได้เปลี่ยนคำว่า “งานน่าเบื่อ” ให้เป็น workflow ที่เห็น input, output, pain point และขอบเขตความรับผิดชอบแล้ว เก็บ Card นี้ไว้ เพราะเราจะกลับมาออกแบบ prompt และทดลอง workflow จริงใน Module 5

[กลับไปหน้าหลัก](../../) · [ไป Module 2](../module-02-copilot-as-ba-assistant/)

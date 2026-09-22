# Work smart with AI for Business Analyst

ชุดกิจกรรมนี้จัดทำสำหรับ Business Analysts ในหลักสูตรของ Mitr Phol และใช้สถานการณ์สมมติที่นำไปปรับใช้กับองค์กรอื่นได้ เราจะฝึกใช้ `Copilot Chat` เป็นผู้ช่วย BA รุ่นน้องที่ช่วยร่าง สรุป และเสนอทางเลือกได้ ส่วน BA ยังเป็นผู้เลือก source ตรวจหลักฐาน ตั้งคำถาม และรับผิดชอบผลลัพธ์สุดท้าย

หลักสูตรเป็นแบบ Onsite 1 วัน เวลา 09:00–16:00 มีกิจกรรมการเรียนรู้รวม 5 ชั่วโมง 30 นาที และมีเวลาพักรวม 1 ชั่วโมง 30 นาที

## ก่อนเริ่ม

- ใช้บัญชี Microsoft 365 สำหรับที่ทำงานหรือสถานศึกษา ซึ่งองค์กรเปิดให้ใช้ `Copilot Chat`
- ไม่จำเป็นต้องมี Microsoft 365 Copilot add-on แต่ความพร้อมของบางความสามารถอาจขึ้นกับ subscription, service capacity และ tenant policy
- ใช้ browser รุ่นปัจจุบันและลงชื่อเข้าใช้บัญชีที่ผู้จัดอบรมกำหนด
- ดาวน์โหลดหรือเปิดไฟล์ในหัวข้อ [Practice files](#practice-files)
- ใช้เฉพาะข้อมูลสมมติใน workshop ห้ามใส่ข้อมูลลับ ข้อมูลส่วนบุคคล หรือข้อมูลภายในที่ยังไม่ได้รับอนุญาตลงใน prompt

> **Fallback:** ถ้า `File upload` ใช้ไม่ได้ ให้เปิดไฟล์ Markdown แล้ว copy/paste เนื้อหาที่ต้องใช้ลงใน Chat ถ้า `Copilot Pages` หรือ `Prompt Gallery` ใช้ไม่ได้ ให้บันทึกผลลัพธ์และ prompt ลงใน `BA Work Experiment Card` แทน

## Agenda และ Exercises

1. **09:00–09:30** — [Module 1: Framing the BA Boring Task](./exercises/module-01-frame-the-boring-task/)
2. **09:30–10:30** — [Module 2: Using Copilot as a BA Assistant](./exercises/module-02-copilot-as-ba-assistant/)
3. **10:45–12:00** — [Module 3: Evidence-Grounded BA Analysis](./exercises/module-03-evidence-grounded-analysis/)
4. **13:00–14:30** — [Module 4: Communicate, Test, and Improve a BA Workflow](./exercises/module-04-requirements-and-communication/)
5. **14:45–16:00** — [Module 5: Solving the BA Boring Task with Copilot Chat](./exercises/module-05-ba-work-experiment/)

พักช่วงเช้า 10:30–10:45, พักกลางวัน 12:00–13:00 และพักช่วงบ่าย 14:30–14:45

## Practice files

- [Synthetic Cross-BU Case Pack](./files/synthetic-cross-bu-case-pack.md) — ข้อมูลสมมติสำหรับ Modules 2–4
- [BA Work Experiment Card](./files/ba-work-experiment-card.md) — แบบบันทึกสำหรับ Modules 1 และ 5 รวมถึง fallback สำหรับบันทึก prompt หรือ Page
- [Verification Checklist](./files/verification-checklist.md) — รายการตรวจ source, fact, assumption, gap, citation, number และ action ก่อนใช้ผลลัพธ์

## วิธีทำงานกับ Copilot ในหลักสูตรนี้

ใช้สอง framework ต่อเนื่องกัน:

1. เขียน prompt ด้วย `Goal + Context + Source + Expectation`
2. ตรวจผลลัพธ์ด้วย `Draft → Inspect → Refine → Verify`

**Goal + Context → Source → Expectation → Draft → Inspect → Refine → Verify ก่อนใช้**

## ขอบเขตของ Workshop

กิจกรรมใช้ `Copilot Chat`, ข้อมูลจาก public web และข้อมูลที่ผู้เรียนเลือก upload หรือ paste เอง ไม่ครอบคลุม Work IQ, Microsoft Graph grounding, Agent Builder, in-app Copilot, tenant configuration, production automation หรือการ Publish ระบบจริง

## Microsoft references

- [How Copilot Chat works with and without a Microsoft 365 Copilot license](https://support.microsoft.com/en-US/Microsoft-365-Copilot/how-copilot-chat-works-with-and-without-a-microsoft-365-copilot-license)
- [How Microsoft 365 Copilot Pages works](https://support.microsoft.com/en-us/microsoft-365-copilot/how-microsoft-365-copilot-pages-works)
- [Sharing prompts with a Team](https://support.microsoft.com/en-us/office/learn-about-copilot-prompts/sharing-prompts-with-a-team)

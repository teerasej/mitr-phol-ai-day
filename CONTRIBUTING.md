# วิธีแก้ไขเว็บไซต์หลักสูตร

เว็บไซต์นี้ใช้ Markdown เป็น source of truth และใช้ VitePress สร้างหน้าเว็บ จึงแก้เนื้อหาได้เหมือนแก้เอกสาร Markdown ทั่วไป

## เตรียมเครื่อง

- ติดตั้ง Node.js 24 หรือใหม่กว่า
- เปิด Terminal ที่ root ของ repository
- รัน `npm ci` เพื่อติดตั้ง dependency ตาม lockfile

## Preview ก่อนเผยแพร่

1. รัน `npm run dev`
2. เปิด URL ที่แสดงใน Terminal
3. ตรวจหน้าแรก, Module ที่แก้ และลิงก์ไป Practice files
4. รัน `npm run build` ก่อนส่งการเปลี่ยนแปลงขึ้น GitHub

## แก้เนื้อหาปัจจุบัน

- หน้าแรกของผู้เรียน: `index.md`
- กิจกรรม: `exercises/<module-name>/index.md`
- ไฟล์ประกอบ: `files/*.md`
- Navigation และข้อมูลเว็บไซต์: `.vitepress/config.mts`
- สีและรูปแบบ: `.vitepress/theme/custom.css`

ให้คงโครงสร้างของแต่ละ Practice ไว้ดังนี้:

1. มี `Primary target` เพียงหนึ่งผลลัพธ์หลัก
2. มี numbered steps ที่เริ่มจาก state ที่อธิบายแล้ว
3. มี copy-paste prompt เมื่อต้องพิมพ์ prompt
4. จบด้วย `Checkpoint` ที่ตรวจผลลัพธ์หลักนั้นได้
5. ระบุ `Fallback` เมื่อ feature อาจไม่พร้อมใช้ในบาง tenant

## เพิ่ม Module ใหม่

1. สร้าง `exercises/<module-name>/index.md`
2. เพิ่มลิงก์ใน `nav` และ `sidebar` ภายใน `.vitepress/config.mts`
3. เพิ่มลิงก์และเวลาเรียนใน `index.md`
4. เพิ่มลิงก์บทก่อนหน้าและบทถัดไปในหน้า Module ที่เกี่ยวข้อง
5. รัน `npm run build` เพื่อตรวจลิงก์และการ render

## ปรับ Soft Mitr Phol Theme

แก้ค่ากลุ่ม `--mp-*` ตอนต้นของ `.vitepress/theme/custom.css` เพื่อปรับ palette จากจุดเดียว ควรคงพื้นเนื้อหาให้อ่านง่าย ใช้สีแบรนด์กับ link, active state, heading และ checkpoint เท่านั้น และตรวจทั้ง light mode กับ dark mode

## Public-safety check

ก่อนเผยแพร่ ให้ตรวจว่าไม่มีข้อมูลลับ ข้อมูลส่วนบุคคล credential, private URL, internal path, commercial detail หรือข้อมูลจริงของลูกค้าปะปนอยู่ใน learner materials

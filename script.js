// الانتظار حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. التفاعل مع نموذج اتصل بنا عند الإرسال
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // منع الصفحة من إعادة التحميل التلقائي
            event.preventDefault();
            
            // جلب اسم العميل المكتوب في الخانة الأولى
            const clientName = contactForm.querySelector('input[type="text"]').value;
            
            // إظهار رسالة نجاح مبهجة للعميل
            alert(`شكراً لتواصلك معنا يا فنان، أ/ ${clientName}! ✨\nفريق جراند ميديا هيرد عليك خلال 24 ساعة لتجهيز استراتيجية حملتك الإعلانية.`);
            
            // تفريغ الخانات بعد الإرسال
            contactForm.reset();
        });
    }

});
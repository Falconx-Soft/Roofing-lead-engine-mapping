from django.shortcuts import render

from .models import RoofingLead
from django.conf import settings
from django.core.mail import send_mail

from django.http import FileResponse
import io
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter
from django.core.mail import EmailMessage

# Create your views here.
def home(request):
    if request.method == 'POST':
        category_selected= request.POST.get('category_selected')
        print('category_selected______________',category_selected)
        zipcode= request.POST.get('zipcode')
        print('zipcode_________',zipcode)
        name= request.POST.get('name')
        print('name___________',name)
        phone= request.POST.get('phone')
        print('phone-___________________',phone)
        email= request.POST.get('email')
        print('email-_________________',email)
        insurance_company= request.POST.get('insurance_company')
        print('insurance_company--------------------',insurance_company)
        size_of_house= request.POST.get('size_of_house')
        print('size_of_house-____________',size_of_house)
        severe_leaks= request.POST.get('severe_leaks')
        print('severe_leaks-____________',severe_leaks)

        slope= request.POST.get('slope')
        print('slope-______________',slope)
        no_of_stories= request.POST.get('no_of_stories')
        print('no_of_stories',no_of_stories)
        material= request.POST.get('material')
        print('material------------',material)
        starting_time= request.POST.get('starting_time')
        print('starting_time------------------',starting_time)
        conversation= request.POST.get('conversation')
        print('conversation-___________________',conversation)
        email= request.POST.get('email')
        print('email-_________________',email)
        insurance_company= request.POST.get('insurance_company')
        print('insurance_company--------------------',insurance_company)
        severe_leaks= request.POST.get('severe_leaks')
        print('severe_leaks-____________',severe_leaks)
        conversation= request.POST.get('conversation')
        print('conversation-____________',conversation)
        inspection_time= request.POST.get('inspection_time')
        print('inspection_time-____________',inspection_time)
        appointment_date= request.POST.get('appointment_date')
        print('appointment_date-____________',appointment_date)

        RoofingLead_obj= RoofingLead.objects.create(category_selected= category_selected, zip_code=zipcode, name=name, phone_number=phone, email=email)
        if insurance_company:
            RoofingLead_obj.insurance_company=insurance_company
            RoofingLead_obj.home_size= size_of_house
            RoofingLead_obj.severe_damage_leaks=severe_leaks
            RoofingLead_obj.slope=slope
            RoofingLead_obj.stories= no_of_stories
            RoofingLead_obj.material_quality=material
            RoofingLead_obj.starting_time=starting_time
            RoofingLead_obj.conversation_finance=conversation

            # creating pdf

            buf = io.BytesIO()

            c = canvas.Canvas(buf, pagesize=letter, bottomup=0)

            textob = c.beginText()
            textob.setTextOrigin(inch, inch)
            textob.setFont("Helvetica", 14)


            lines = {
                "Category selected: "+category_selected,
                "zipcode: "+zipcode,
                "Name: "+name,
                "Phone: "+phone,
                "email: "+email,
                "Insurance company: "+insurance_company,
                "Size of house: "+size_of_house,
                "Severe leaks: "+severe_leaks,
                "Slope: "+slope,
                "No of stories: "+no_of_stories,
                "Material: "+material,
                "Starting time: "+starting_time,
                "Conversation: "+conversation
            }

            for line in lines:
                textob.textLine(line)

            c.drawText(textob)
            c.showPage()
            c.save()
            pdf = buf.getvalue()
            buf.close()

            subject = "New order"
            message = "There is a new order"
            emails = [email]
            mail = EmailMessage(subject, message, settings.EMAIL_HOST_USER,    emails)
            mail.attach('generated.pdf', pdf, 'application/pdf')
            
            mail.send(fail_silently = False)
            


            RoofingLead_obj.save()
        if appointment_date:
            RoofingLead_obj.appointment_date=appointment_date
            RoofingLead_obj.appointment_time=inspection_time

            # creating pdf

            buf = io.BytesIO()

            c = canvas.Canvas(buf, pagesize=letter, bottomup=0)

            textob = c.beginText()
            textob.setTextOrigin(inch, inch)
            textob.setFont("Helvetica", 14)

            lines = {
                "Category selected: "+category_selected,
                "zipcode: "+zipcode,
                "Name: "+name,
                "Phone: "+phone,
                "email: "+email,
                "Insurance company: "+insurance_company,
                "Size of house: "+size_of_house,
                "Severe leaks: "+severe_leaks,
                "Slope: "+slope,
                "No of stories: "+no_of_stories,
                "Material: "+material,
                "Starting time: "+starting_time,
                "Conversation: "+conversation,
                "Appointment date; "+appointment_date,
                "Inspection time: "+inspection_time
            }

            for line in lines:
                textob.textLine(line)

            c.drawText(textob)
            c.showPage()
            c.save()
            pdf = buf.getvalue()
            buf.close()

            subject = "New order"
            message = "There is a new order"
            emails = [email]
            mail = EmailMessage(subject, message, settings.EMAIL_HOST_USER,    emails)
            mail.attach('generated.pdf', pdf, 'application/pdf')
            
            mail.send(fail_silently = False)

            RoofingLead_obj.save()
    return render(request,'roofing/main.html')
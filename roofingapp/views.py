from django.shortcuts import render

from .models import RoofingLead

# Create your views here.
def home(request):
    if request.method == 'POST':
        category_selected= request.POST.get('category_selected')
        print('category_selected______________',category_selected)
        zipcode= request.POST.get('zipcode')
        print('zipcode_________',zipcode)
        first_name= request.POST.get('first_name')
        print('first_name___________',first_name)
        last_name= request.POST.get('last_name')
        print('last_name____________',last_name)
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

        RoofingLead_obj= RoofingLead.objects.create(category_selected= category_selected, zip_code=zipcode, first_name=first_name, last_name=last_name, phone_number=phone, email=email)
        if insurance_company:
            RoofingLead_obj.insurance_company=insurance_company
            RoofingLead_obj.home_size= size_of_house
            RoofingLead_obj.severe_damage_leaks=severe_leaks
            RoofingLead_obj.slope=slope
            RoofingLead_obj.stories= no_of_stories
            RoofingLead_obj.material_quality=material
            RoofingLead_obj.starting_time=starting_time
            RoofingLead_obj.conversation_finance=conversation
            RoofingLead_obj.save()
        if appointment_date:
            RoofingLead_obj.appointment_date=appointment_date
            RoofingLead_obj.appointment_time=inspection_time
            RoofingLead_obj.save()
    return render(request,'roofing/main.html')
# Generated by Django 4.0.4 on 2022-05-09 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RoofingLead',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_selected', models.CharField(max_length=200)),
                ('zip_code', models.IntegerField(default=0)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('phone_number', models.IntegerField()),
                ('email', models.EmailField(max_length=300)),
                ('insurance_company', models.CharField(max_length=15)),
                ('home_size', models.FloatField(default=0)),
                ('severe_damage_leaks', models.CharField(max_length=15)),
                ('slope', models.CharField(max_length=15)),
                ('stories', models.CharField(max_length=30)),
                ('material_quality', models.CharField(max_length=50)),
                ('starting_time', models.CharField(max_length=30)),
                ('converstaion_finance', models.CharField(max_length=10)),
                ('apointment_date', models.CharField(max_length=50)),
            ],
        ),
    ]

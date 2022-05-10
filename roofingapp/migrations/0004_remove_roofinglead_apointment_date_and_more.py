# Generated by Django 4.0.4 on 2022-05-10 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roofingapp', '0003_alter_roofinglead_home_size'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='roofinglead',
            name='apointment_date',
        ),
        migrations.AddField(
            model_name='roofinglead',
            name='appointment_date',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='roofinglead',
            name='appointment_time',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]

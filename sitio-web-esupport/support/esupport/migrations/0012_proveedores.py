# Generated by Django 4.2.3 on 2023-08-05 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('esupport', '0011_oferta_nombreproducto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Proveedores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('producto', models.CharField(max_length=100)),
                ('marca', models.CharField(max_length=100)),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='productos/')),
            ],
        ),
    ]

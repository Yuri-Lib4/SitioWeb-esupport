# Generated by Django 4.2.3 on 2023-07-27 02:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('esupport', '0008_periféricos'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Periféricos',
            new_name='Perifericos',
        ),
        migrations.AddField(
            model_name='producto',
            name='perifericos',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='esupport.perifericos'),
        ),
    ]

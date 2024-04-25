from django.shortcuts import render
from .utils import reversestr

# Create your views here.
def index(request):
    if request.method == 'POST' and 'file' in request.FILES:
        uploadedFile = request.FILES['file']
        if uploadedFile.content_type == 'text/plain':
            uploadedFile = request.FILES['file'].read().decode('utf-8')
            charCount = len(uploadedFile)
            reversedString = reversestr(uploadedFile)
            context = {
            'file_content':uploadedFile,
            'char_count':charCount,
            'reversed':reversedString,
            }
            return render(request, 'index.html', context)
        else:
            error = 'This is not a supported file type...use .txt'
            context = {
            'error':error,
            }
            return render(request, 'index.html', context)
    else:
        context = {}
        return render(request, 'index.html', context)
    
def cart(request):
    context = {}
    return render(request, 'cart.html',context)
    $(()=>{
        var rcd=0;       //����ͼƬ��li��ǩ��ŵ�ȫ�ֱ���
//       ��������
        function slide(){   
          rcd++;
          if(rcd==4){  
			  //�һ������һ��ʱ,��ͼƬ�趨Ϊ��һ�ŵ�λ��,����������ͼƬ�趨Ϊ�ڶ���(rcd=1)
          $('#sld').css({'left':'0'});
            rcd=1;
          };
          var dis = rcd*(-759)+'px';    //759ͼƬ���,rcd��dis�Ĺ�ϵ�����±��div leftֵ
          $('#sld').stop().animate({'left':dis},1000)  //�趨left
          if (rcd==3) {    //���л������һ��ʱ(һ��3��ͼƬ),�����·��ı�ǩ��ʽҲ�ĳ����һ��һ����
            $('#show-img ul li').eq(0).css({'opacity': '0.6'}).siblings('li').css({'opacity': '0.2'})
          }else{
            $('#show-img ul li').eq(rcd).css({'opacity': '0.6'}).siblings('li').css({'opacity': '0.2'})      //�������һ����ô������ִ��
          }
        }
//       �趨��ʱ��,��ʼ�ֲ�
        var timer = setInterval(slide,2000);
        var st;    //��������ʱ����������
//       ��li������¼�
        $('#show-img ul li').click(()=>{
          clearInterval(timer);     //�����ʱ��(ͬ��һ��)
          clearTimeout(st);
          var rcd = $(this).index();   //��õ����li���±�
          var dis =rcd*(-759)+'px';   //��øñ�Ŷ�Ӧ��div��leftֵ
          $('#sld').stop().animate({'left':dis},500)  //��ʼ�˶�
          $('#show-img ul li').eq(rcd).css({'opacity': '0.6'}).siblings('li').css({'opacity': '0.2'})     //���õ�ǰli��ʽ,����li��Ϊ��ʼֵ
          st = setTimeout(()=>{   //���ö�ʱ��,��3����û�����������,�����������ֲ���ʱ��
            timer = setInterval(slide,2000);
          },3000);
        }); 
    })


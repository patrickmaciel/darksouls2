defs : [6,12,18,24,30,36,42,48,54,60,68,76,84,92,100,108,116,124,132,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,180,181,181,182,182,183,183,184,184,185,185,186,186,187,187,189,189,190,190,191,191,192,192,193,193,194,194,195,195,196,196,197,197,198,198,199,200]
magic = defs[int];
fire = defs[(int + fai) / 2 ]
lig = defs[fai]
dark = defs[min(int,fai)]  

pet res = defs[((adp * 1.3) + vgr) / 2.3]  basic rounding
cur res = defs[((adp * 1.3) + att) / 2.3]  basic rounding
ble res = defs[((adp * 1.3) + fth) / 2.3]  basic rounding
poi res = defs[((adp * 1.3) + vit) / 2.3]  basic rounding

agili : [83,84,84,85,85,86,86,87,87,88,88,89,89,90,90,91,91,92,92,93,93,94,94,95,95,96,96,97,97,98,98,99,99,100,100,101,101,102,102,103,103,104,104,105,105,106,106,107,107,108,108,109,109,110,110,110,110,110,111,111,111,111,111,112,112,112,112,113,113,113,113,113,114,114,114,114114,115,115,115,115,116,116,116,116,116,117,117,117,117,117,118,118,118,118,119,119,119,119,120]
agl = defs[((adp * 2) + att) / 3]  close...  basic rounding



speed : [37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,116,117,118,119,120,121,122,123,124,125,126,126,127,127,128,128,129,129,130,130,131,131,132,132,133,133,134,134,135,135,136,136,137,137,138,138,139,139,140,140,141,141,142,142,143,143,144,144,145,145,146,146,147,147,148,148,149,149,150]
castspeed = ((att * 2) + fth + int ) / 4;  rounds down

phy : [0,0,0,0,0,70,72,75,77,80,81,82,83,84,85,86,87,89,90,91,93,95,97,99,102,104,106,108,110,113,115,118,121,124,127,130,133,136,139,142,143,145,147,149,151,152,154,156,158,160,160,160,161,161,161,162,162,163,163,163,164,165,165,166,167,168,168,169,170,171,172,173,175,176,178,179,181,182,184,185,186,186,187,188,189,189,190,191,192,192,193,194,195,195,196,197,198,199,200]
phy def = (end + vit + str + dex) / 4;

atk str/dex : [0,0,0,0,0,52,54,55,56,56,57,59,61,63,66,68,70,73,75,77,80,82,84,86,89,91,93,95,98,100,102,105,109,113,117,121,124,128,132,136,140,141,143,144,146,147,149,150,152,153,155,155,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,171,173,174,176,177,179,180,182,183,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200]


pet res : [0,0,0,0,0,36]

1.66




///////////////////////

var data = jQuery('.wiki-content-table').find('tr');
var holder = [];
data.each(function(index){
  var tds = data.eq(index).find('td');
 
  tds.each(function(inde){
    var d = [];
      var tar = jQuery(tds[inde]);
    if(tar.text() == '' || tar.next().text() == '') {
      }
    else {
      d = parseInt(tar.next().text());
      holder.push(d);
        
    }
  });
    
});
var txt = JSON.stringify(holder.sort(function(a,b) { return a - b; }));

jQuery('#containerggg').html(txt);



bns = 200 * ((fthbns * fstat) + (dexbns * dstat))

150 * ((0.395 * fstat) + (0.635 * dstat))

129 - 50 = 79 = 0.395
177 - 50 = 127 = 0.635


150 * ((0.395 * 0.06) + (0.635 * 0.06))

0.0237 + 0.0381

0.0618 * 99

fth = 25% = .00255

defs[((adp * 1.3) + vgr) / 2.3]

0,
0,
0,
0,
0,
54
55
56
56
57
61
66
70
75
79
84
88
93
97
102
105
108
111
114
117
120
123
126
129
132
133
135
136
138
139
141
142
144
146
147
147
148
148
149
150
151
151
152
153
154
155
155
156
157
158
158
159
160
161
161
162
162
163
164
165
166
166
167
168
169
170
171
173
174
176
177
179
180
182
183
185
185
186
187
188
188
189
190
191
191
192
192
193
194
195
196
197
198
199
200
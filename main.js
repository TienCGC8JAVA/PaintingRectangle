let Rectangle = function (inputRect, paintingRect)
{
    this.inputRect = function (width, height)
    {
        width = parseInt(prompt("Nhập chiều dài hình chữ nhật"));
        height = parseInt(prompt("Nhập chiều rộng hình chữ nhật"));
        this.width = width;
        this.height = height;
    }

    this.paintingRect = function ()
    {
        for (let i = 1 ; i <= this.height; i++)
        {
            for (let j = 1; j <= this.width; j++)
            {
                if (i === 1 || i === this.height)
                {
                    document.write("*");

                }
                else
                {
                    if (j === 1 || j === this.width)
                    {
                        document.write("*");
                    }
                    else
                    {
                        document.write("&nbsp;&nbsp");
                    }

                }
            }
            document.write("<br/>");
        }
    }
};

let rectangle = new Rectangle();
rectangle.inputRect();
rectangle.paintingRect();


